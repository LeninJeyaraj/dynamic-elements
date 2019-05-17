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
