import { Validators } from '@angular/forms';

export interface dataHome {
  title: string;
  describe: string;
}

export interface menuNav {
  path: string;
  name: string;
}

interface select {
  name: string;
  value: string;
}

export interface FormInputs {
  class?: string;
  label?: string;
  placeholder: string;
  type: string;
  select?: select[];
  validators?: Validators;
  initialValue?: string;
}
