import { TargetBinder } from '@angular/compiler';
import { Component } from '@angular/core';
import { UtilityServiceService } from 'src/app/services/Utility-services/utility-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private _tabService: UtilityServiceService) {}
  selected(tab: string) {
    this._tabService.onChangeSelect(tab);
  }
}
