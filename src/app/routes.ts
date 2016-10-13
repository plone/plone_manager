import { SitedefinitionComponent } from './sitedefinition/sitedefinition.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Routes } from '@angular/router';
import { BrowserComponent } from './browser/browser.component';
import { RegistryComponent } from './registry/registry.component';
import { TypesComponent } from './types/types.component';


export const PLONEMANAGER_ROUTES: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'define-site', component: SitedefinitionComponent},
  {path: 'browser', component: BrowserComponent},
  {path: 'registry', component: RegistryComponent},
  {path: 'types', component: TypesComponent}
];
