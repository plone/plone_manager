import { Component, OnInit } from '@angular/core';
import { PloneapiService } from '../ploneapi.service';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  fixedCols = 4;
  fixedRowHeight = 60;
  current_path = '/';
  result: any;

  constructor(public api: PloneapiService, public config: ConfigurationService) { }

  ngOnInit() {
    this.load(this.current_path);
  }

  load(id) {
    this.current_path = id;
    this.api.getObject(this.current_path)
    .subscribe(
      res => this.result = res.json(),
      err => console.log(err)
    );
  }
}
