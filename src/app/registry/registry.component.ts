import { Component, OnInit } from '@angular/core';
import { PloneapiService } from '../ploneapi.service';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  result: any;

  constructor(public api: PloneapiService, public config: ConfigurationService) { }

  ngOnInit() {
    this.api.getRegistry()
    .subscribe(
      res => this.result = res.json(),
      err => console.log(err)
    );
  }

}
