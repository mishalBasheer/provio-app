import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

const materialModules =[
  MatIconModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatSelectModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,...materialModules
  ],
  exports:[...materialModules]
})
export class MaterialModule { }
