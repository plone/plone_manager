import { Component, OnInit } from '@angular/core';
import { PloneapiService } from '../ploneapi.service';
import { ConfigurationService } from '../configuration.service';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {ViewContainerRef} from '@angular/core';


@Component({

  selector: 'create-dialog',
  template: `
  <schema-form [schema]="schema" [model]="model" [actions]="actions">
  </schema-form>`
})
export class CreateDialogComponent implements OnInit{
  public typeDocument: string;
  public schema: any = {};
  private actions: any = {};
  private model: any;

  constructor(public dialogRef: MdDialogRef<CreateDialogComponent>) {
  }

  ngOnInit() {
    this.actions = {
      save: this.onSave.bind(this),
      cancel: this.onCancel.bind(this)
    };
  }

  onCancel(schemaForm) {

  }

  onSave(schemaForm) {
    // add or remove category
    this.dialogRef.close(schemaForm);
  }
}



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
  sharing: any;

  dialogRef: MdDialogRef<CreateDialogComponent>;

  constructor(
      public api: PloneapiService,
      public config: ConfigurationService,
      public dialog: MdDialog,
      public viewContainerRef: ViewContainerRef) {
    // this.schema = {
    //   '$schema': 'http://json-schema.org/draft-04/hyper-schema#',
    //   'type': 'object',
    //   'properties': {
    //     'firstName': {
    //       'type': 'string',
    //       'title': 'whatever'
    //     }
    //   }
    // };

  }

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
    this.api.getSharing(this.current_path)
    .subscribe(
      res => this.sharing = res.json(),
      err => console.log(err)
    );
  }

  createDocument() {
    this.api.getSchema('Document')
    .subscribe(
      res => this.callDialog(res.json()),
      err => console.log(err)
    );

  }

  callDialog(schema) {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    schema.buttons = [
      {
        id: 'save', label: 'Save'
      },
      {
        id: 'cancel', label: 'Cancel'
      }
    ];
    let self = this;
    this.dialogRef = this.dialog.open(CreateDialogComponent, config);
    this.dialogRef.componentInstance.schema = schema;
    this.dialogRef.afterClosed().subscribe(result => {
      self.api.createObject(this.current_path, 'Document', result.value)
      .subscribe(
        res => this.load(this.current_path),
        err => console.log(err)
      );
      self.dialogRef = undefined;
    });

  }
}
