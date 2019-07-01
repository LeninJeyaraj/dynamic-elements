import { Component } from '@angular/core';
import {
  ConfigModal,
  GroupConfigModal,
  DateConfig
} from './components/dynamic-element/dynamic-component.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputElementClass = '{cursor: pointer}';

  // text/text area/
  textFieldConfig: ConfigModal = {
    type: 'text',
    // title: 'Hobbies', // optional
    placeholder: 'This is is a text field',
    formcontrolname: 'hobbyControl'
  };

  numberFieldConfig: ConfigModal = {
    type: 'number',
    // title: 'Hobbies', // optional
    placeholder: 'This is is a numeric field',
    formcontrolname: 'hobbyControl'
  };

  textAreaFieldConfig: ConfigModal = {
    type: 'textarea',
    // title: 'Hobbies', // optional
    placeholder: 'This is is a text area field',
    formcontrolname: 'hobbyControl'
  };

  // Group element - radio/checkbox
  radioFieldConfig: GroupConfigModal = {
    type: 'radio',
    title: 'Gender', // optional
    tags: [
      { tag: 'Male', formcontrolname: 'male' },
      { tag: 'Female', formcontrolname: 'female' },
      { tag: 'Other', formcontrolname: 'other' }
    ]
  };

  checkBoxFieldConfig: GroupConfigModal = {
    type: 'checkbox',
    title: 'Hobbies', // optional
    tags: [
      { tag: 'Sleeping', formcontrolname: 'sleeping' },
      { tag: 'Listening to Music', formcontrolname: 'listeningToMusic' },
      { tag: 'Playing Cricket', formcontrolname: 'playingCricket' }
    ]
  };

  // Date field
  dateFieldConfig: DateConfig = {
    type: 'date',
    formcontrolname: 'date',
    placeholder: 'Select date',
    // selectdate: new Date('2019/04/18'),
    minDate: new Date(),
    maxDate: new Date('2019/04/20'),
    datepickerconfig: {
      showWeekNumbers: false,
      dateInputFormat: 'YYYY-MM-DD'
    }
  };
}
