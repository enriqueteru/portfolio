import { Validators } from '@angular/forms';

export interface dataHome {
  title: string;
  describe: string;
  list?:string[]
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

export interface resApiResources {
  msg: string;
  proyects: proyect[];
}

export interface resApiResource {
  msg: string;
  proyect: proyect;
}

export interface proyect {
  id: number;
  name: string;
  client: string;
  description: string;
  categorie: string;
  state: boolean;
  content: string;
  coverImg: string;
  github: string;
  web: string;
}



export interface resApiResourcesgallery {
  msg: string;
  images: image[];
}

export interface image {
  id: number,
  id_gallery: number,
  image: string
}
