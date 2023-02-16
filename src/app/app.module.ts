import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { LodingSpinnerComponent } from './shared/loding-spinner/loding-spinner.component';
import { AppReducer } from './store/app.state';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, LodingSpinnerComponent, ErrorDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
