export interface ConfigModal {
  type: string;
  formcontrolname: string;
  title?: string;
  placeholder?: string;
  required?: boolean;
}

export interface GroupConfigTags {
  tag: string;
  formcontrolname: string;
}

export interface GroupConfigModal {
  type: string;
  tags?: Array<GroupConfigTags>;
  title?: string;
  placeholder?: Array<string>;
  required?: boolean;
}

export interface DateConfig {
  type: string;
  formcontrolname: string;
  placeholder: string;
  selectdate?: Date;
  minDate?: Date;
  maxDate?: Date;
  datepickerconfig: {
    showWeekNumbers: boolean;
    dateInputFormat: string;
  };
}
