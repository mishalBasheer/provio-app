import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { startCreateNewTask } from 'src/app/components/dashboard/state/workspace.action';
import { S3BucketService } from 'src/app/services/s3.service';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';

export interface AddTaskDialogData {
  list: string;
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  title!: string;
  newTaskForm!: FormGroup;
  fileArrayObject!: FileList | null;
  filesUrlArray: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AddTaskDialogData,
    private _store: Store<AppState>,
    private _s3service: S3BucketService
  ) {}
  ngOnInit(): void {
    this.newTaskForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      priority: new FormControl(null),
      checklist: new FormControl(null),
      due: new FormControl(null),
    });
  }
  newTaskSubmit() {
    if (this.newTaskForm.invalid) {
      return;
    }
    const { title, description, priority, due } = this.newTaskForm.value;
    const attachment: string[] = [];
    console.log({ title, description, priority, due });
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
                console.log(fileUrl);

                // attachment = [...attachment, fileUrl];
                attachment.push(fileUrl);
                imageForm.append('file', this.fileArrayObject?.item(i) as Blob);

                this._s3service
                  .uploadfileAWSS3(fileuploadurl, fileObject.type, fileObject)
                  .subscribe((data: any) => {
                    if (this.fileArrayObject && data.ok)
                      if (i === this.fileArrayObject?.length - 1) {
                        console.log('hello', i, data);
                        this.filesUrlArray = attachment;
                        this._store.dispatch(
                          startCreateNewTask({
                            task: {
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
        startCreateNewTask({
          task: {
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
            if (files.target?.result && typeof files.target.result ==='string')
              this.filesUrlArray.push(files.target.result);
              console.log(this.filesUrlArray);
              
          };
        }
      }
    this.fileArrayObject = FILES.files;
    console.log(this.fileArrayObject);
  }
}
