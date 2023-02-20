import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

const materialModules = [
  MatIconModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDialogModule,
  MatMenuModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules],
})
export class MaterialModule {}
