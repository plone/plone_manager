import { Component, OnInit } from '@angular/core';
import { PloneapiService } from '../ploneapi.service';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  result: any;

  constructor(public api: PloneapiService, public config: ConfigurationService) { }

  ngOnInit() {
    this.api.getTypes()
    .subscribe(
      res => this.result = res.json(),
      err => console.log(err)
    );
  }


}
