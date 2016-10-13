import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';
import { PloneapiService } from '../ploneapi.service';

@Component({
  selector: 'app-sitedefinition',
  templateUrl: './sitedefinition.component.html',
  styleUrls: ['./sitedefinition.component.css']
})
export class SitedefinitionComponent implements OnInit {

  types = ['plone.server', 'cmfplone'];
  auth_types = ['Basic', 'Bearer'];
  password: string;
  site_to_create: string;
  site_to_create_id: string;
  sites: any;
  message: string;

  constructor(public config: ConfigurationService, public api: PloneapiService) {
  }

  ngOnInit() {
    this.getAvailableSites();
  }

  onConfigSubmit() {
    this.config.save_config();
  }

  onAuthSubmit() {
    this.config.save_auth();
  }

  getOAuthToken() {
    this.config.call_oauth(this.password);
  }

  setSite(site) {
    this.config.config.site = site;
  }

  getAvailableSites() {
    this.api.getSites()
    .subscribe(
      res => this.sites = res.json(),
      err => console.log(err)
    );
  }

  createNewSite() {
    this.api.createSite(this.site_to_create, this.site_to_create_id)
    .subscribe(
      res => this.message = 'Created site ' + this.site_to_create_id,
      err => console.log(err)
    );
  }

}
