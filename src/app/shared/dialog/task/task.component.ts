import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getTaskById } from 'src/app/components/dashboard/state/workspace.selector';
import { TaskState } from 'src/app/components/dashboard/tasks/state/tasks.state';
import { formatDate } from '@angular/common';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import { S3BucketService } from 'src/app/services/s3.service';
import { startUpdateTask } from 'src/app/components/dashboard/state/workspace.action';

export interface UpdateTaskDialogData {
  task: string;
  list: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  taskForm!: FormGroup;
  taskFormData$!: Observable<TaskState | undefined>;
  fileArrayObject!: FileList | null;
  filesUrlArray: string[] = [];
  ngModelTitle!: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UpdateTaskDialogData,
    private _store: Store<AppState>,
    private _s3service: S3BucketService
  ) {}
  ngOnInit(): void {
    //getting data of the task from the state
    this.taskFormData$ = this._store.select(
      getTaskById(this.data.list, this.data.task)
    );

    //setting the initial value of the form fields
    this.taskFormData$.subscribe((data) => {
      console.log(data);

      if (data?.due) {
        this.taskForm = new FormGroup({
          //here the initial value is not null
          title: new FormControl(data?.title, [Validators.required]),
          description: new FormControl(data?.description),
          priority: new FormControl(data?.priority),
          due: new FormControl(formatDate(data?.due, 'yyyy-MM-dd', 'en')),
        });
        this.ngModelTitle = data?.title;
      }

      //loading the attached file if already exists
      if (data?.attachment?.length) this.filesUrlArray = data.attachment;
    });
  }
  updatedTaskSubmit() {
    if (this.taskForm.invalid || !this.taskForm.value.title.trim().length) {
      return;
    }
    const { title, description, priority, due } = this.taskForm.value;
    const attachment: string[] = [];
    this._store.dispatch(setLoadingSpinner({ status: true }));

    if (this.fileArrayObject?.item) {
      for (let i = 0; i < this.fileArrayObject.length; i++) {
        const fileObject = this.fileArrayObject.item(i);
        if (fileObject?.name && fileObject?.type) {
          this._s3service
            .getpresignedurls(fileObject.name, fileObject.type)
            .subscribe((res: any) => {
              if (res.success) {
                const fileuploadurl = res.urls[0];
                const imageForm = new FormData();
                const fileUrl = fileuploadurl.split('?')[0];

                attachment.push(fileUrl);
                imageForm.append('file', this.fileArrayObject?.item(i) as Blob);

                this._s3service
                  .uploadfileAWSS3(fileuploadurl, fileObject.type, fileObject)
                  .subscribe((data: any) => {
                    if (this.fileArrayObject && data.ok)
                      if (i === this.fileArrayObject?.length - 1) {
                        this._store.dispatch(
                          startUpdateTask({
                            task: {
                              _id: this.data.task,
                              title,
                              description,
                              priority,
                              attachment,
                              due,
                              list: this.data.list,
                            },
                          })
                        );
                      }
                  });
              }
            });
        }
      }
    } else {
      return this._store.dispatch(
        startUpdateTask({
          task: {
            _id: this.data.task,
            title,
            description,
            priority,
            due,
            list: this.data.list,
          },
        })
      );
    }
  }
  //file uploading to s3bucket
  onFileChange(files: Event) {
    const FILES = files.target as HTMLInputElement;
    if (FILES.files?.length)
      for (let i = 0; i < FILES.files?.length; i++) {
        if (FILES.files && FILES.files[i]) {
          const reader = new FileReader();

          reader.readAsDataURL(FILES.files[i]); // read file as data url

          reader.onload = (files) => {
            // called once readAsDataURL is completed
            if (files.target?.result && typeof files.target.result === 'string')
              // this.filesUrlArray.push(files.target.result);
              this.filesUrlArray = [
                ...this.filesUrlArray,
                files.target?.result,
              ];
          };
        }
      }
    this.fileArrayObject = FILES.files;
  }
}
