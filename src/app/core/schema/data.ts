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

export interface team {
  id: number;
  img: string;
  description: string;
  name: string;
  job: string;
  extra?: string;
  state: boolean;
  email: string;
  linkedin: string;
  github: string;
}

export interface resApiUsers {
  msg: string;
  users: team[];
}

export interface resApiUser {
  msg: string;
  user: team;
}

export interface solution {
  name: string;
  description?: string;
  path: string;
}
