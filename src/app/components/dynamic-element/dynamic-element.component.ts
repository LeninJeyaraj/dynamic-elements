import { Component, OnInit, Input } from '@angular/core';
import * as fromUtils from './utils';
import { ConfigModal } from './dynamic-component.modal';

@Component({
  selector: 'app-dynamic-element',
  templateUrl: './dynamic-element.component.html',
  styleUrls: ['./dynamic-element.component.scss']
})
export class DynamicElementComponent implements OnInit {
  // inits
  config: any;
  isGroupElement: boolean;
  isDate: boolean;
  bsConfig: any = {};
  isTextField: boolean;
  isTextArea: boolean;

  @Input('configData')
  set configData(config) {
    this.config = config;
    if (config.type === 'text' || config.type === 'number') {
      this.isTextField = true;
    } else if (config.type === 'checkbox' || config.type === 'radio') {
      this.isGroupElement = true;
    } else if (config.type === 'date') {
      this.bsConfig = config.datepickerconfig;
      this.isDate = true;
    } else if (config.type === 'textarea') {
      this.isTextArea = true;
    }
  }

  constructor() {}

  ngOnInit() {}

  dateChange(dateObj: Date) {
    if (!dateObj) {
      return false;
    }
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const date = dateObj.getDate();
    const formattedDate = Date.UTC(year, month, date);

    console.log('formated date : ', formattedDate);
  }

  validateNumeric(event, configData) {
    if (configData.type !== 'number') {
      return true;
    }
    if (event.shiftKey) {
      return false;
    } // Denying the sift key
    const key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 37) {
      // 46 - Dot character (.)
      return true;
    } else if (key < 48 || key > 57) {
      return false;
    } else {
      return true;
    }
  }
}
