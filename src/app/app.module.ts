import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApplicationRef } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { ConfigurationService } from './configuration.service';
import { PLONEMANAGER_ROUTES } from './routes';
import { SitedefinitionComponent } from './sitedefinition/sitedefinition.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserComponent, CreateDialogComponent } from './browser/browser.component';
import { RegistryComponent } from './registry/registry.component';
import { TypesComponent } from './types/types.component';
import { MdIconRegistry } from '@angular/material';
import { PloneapiService } from './ploneapi.service';
import { MaptoiterablePipe } from './maptoiterable.pipe';

import {
  SchemaFormModule,
  WidgetRegistry,
  DefaultWidgetRegistry
} from 'angular2-schema-form';


@NgModule({
  declarations: [
    AppComponent,
    SitedefinitionComponent,
    WelcomeComponent,
    BrowserComponent,
    RegistryComponent,
    TypesComponent,
    CreateDialogComponent,
    MaptoiterablePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(PLONEMANAGER_ROUTES),
    MaterialModule.forRoot(),
    SchemaFormModule
  ],
  providers: [
    ConfigurationService,
    MdIconRegistry,
    PloneapiService,
    {provide: WidgetRegistry, useClass: DefaultWidgetRegistry}
  ],
  entryComponents: [
    AppComponent,
    CreateDialogComponent
  ],
})
export class AppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(AppComponent);
  }
}
