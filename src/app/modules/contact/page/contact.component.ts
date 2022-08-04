import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormInputs } from 'src/app/core/schema/data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormInputs[] = [
    {
      placeholder: 'Nombre',
      type: 'text',
      validators: Validators.required,
      initialValue: '',
    },
    {
      placeholder: 'Apellido',
      type: 'text',
      validators: Validators.required,
      initialValue: '',
    },
    {
      placeholder: 'Email',
      type: 'email',
      validators: Validators.email,
      initialValue: '',
    },
    {
      placeholder: 'Teléfono',
      type: 'number',
      // validators: Validators.pattern('[- +()0-9]+'),

      initialValue: '',
    },
    {
      placeholder: 'Mensaje',
      type: 'text',
      //  validators: Validators.minLength(5),
      initialValue: '',
    },
    {
      placeholder: 'Presupuesto',
      type: 'select',
      select: [
        { name: 'Presupuesto', value: 'NS/NC' },
        { name: 'Pequeño', value: '1.000 - 5000 €' },
        { name: 'Mediano', value: '1000€ - 9000€' },
        { name: 'Grande', value: '+10000€' },
      ],
      //validators: Validators.required,
      initialValue: 'Presupuesto',
    },
    {
      label: 'Acepto las políticas de privacidad',
      class: 'checkbox-custom checkbox-custom__icon-state',
      placeholder: 'Checkbox',
      type: 'checkbox',
      validators: Validators.requiredTrue,
    },
  ];
  submitted = false;
  contactFormGroup: FormGroup = this._fb.group({});
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm.forEach((el) => {
      this.contactFormGroup.addControl(
        el.placeholder,
        new FormControl(el.initialValue, el.validators)
      );
    });
  }

  fieldsChange(values: any): void {
    this.contactFormGroup
      .get('Checkbox')
      ?.setValue(values.currentTarget.checked);
  }

  submitForm() {
    this.submitted = true;
    console.log(this.contactFormGroup.value);
    console.log(this.contactFormGroup.valid);
  }
}
