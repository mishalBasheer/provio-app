import { Component, OnInit } from '@angular/core';
import { UtilityServiceService } from 'src/app/services/Utility-services/utility-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  tab!: string | null;
  constructor(private _tabService: UtilityServiceService) {}
  ngOnInit(): void {
    this._tabService.onGetSelect().subscribe(data=>{
      this.tab=data;
    });
  }
  selectTab(tab:string){
    this._tabService.onChangeSelect(tab);
  }
}
