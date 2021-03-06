# Angular7CliSampleProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# DynamicElements

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## How to Use

Create a config to build the element

<!-- text field -->

textFieldConfig: ConfigModal = {
type: 'text',
// title: 'Hobbies', // optional
placeholder: 'This is is a text field',
formcontrolname: 'hobbyControl'
};

<!-- number field -->

numberFieldConfig: ConfigModal = {
type: 'number',
// title: 'Hobbies', // optional
placeholder: 'This is is a numeric field',
formcontrolname: 'hobbyControl'
};

<!-- text area -->

textAreaFieldConfig: ConfigModal = {
type: 'textarea',
// title: 'Hobbies', // optional
placeholder: 'This is is a text area field',
formcontrolname: 'hobbyControl'
};

  <!-- Group element - radio button -->

radioFieldConfig: GroupConfigModal = {
type: 'radio',
title: 'Gender', // optional
tags: [
{ tag: 'Male', formcontrolname: 'male' },
{ tag: 'Female', formcontrolname: 'female' },
{ tag: 'Other', formcontrolname: 'other' }
]
};

<!-- Checkbox element -->

checkBoxFieldConfig: GroupConfigModal = {
type: 'checkbox',
title: 'Hobbies', // optional
tags: [
{ tag: 'Sleeping', formcontrolname: 'sleeping' },
{ tag: 'Listening to Music', formcontrolname: 'listeningToMusic' },
{ tag: 'Playing Cricket', formcontrolname: 'playingCricket' }
]
};

  <!-- Date field -->

dateFieldConfig: DateConfig = {
type: 'date',
formcontrolname: 'date',
placeholder: 'Select date',
selectdate: new Date('2019/04/18'),
minDate: new Date(),
maxDate: new Date('2019/04/20'),
datepickerconfig: {
showWeekNumbers: false,
dateInputFormat: 'YYYY-MM-DD'
}
};

# In the concerned compoenent

<dynamic-element [configData]="textFieldConfig"></dynamic-element>

All the best!
