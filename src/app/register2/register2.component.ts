import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators, FormArray } from '@angular/forms';
import { passwordValidator, compareEqual } from '../shared/passwordValidator';
import { HttpClient } from '@angular/common/http';
import { repeatEmail } from '../shared/repeatEmailValidator';

interface ApiData {
  firstName: string;
  lastName: string;
  password: string;
  password2: string;
  emails: string[];
}

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    document.body.id = '';
    document.body.className = 'bg-gradient-primary';
    this.buildForm();
    this.http
      .get<ApiData>('http://www.mocky.io/v2/5cb2f4173000007d00a78ce8')
      .subscribe(x => this.setDataToForm(x));
  }

  setDataToForm(data: ApiData) {
    this.form.patchValue(data);
    this.form.setControl('emails', this.fb.array([], [repeatEmail]));
    const emails = this.form.get('emails') as FormArray;
    data.emails.forEach((email, index) => {
      emails.setControl(index, this.buildEmailControl(email));
    });
  }

  buildForm() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emails: this.fb.array(
        [this.buildEmailControl()],
        [repeatEmail()]
      ),
      password: ['', [passwordValidator]],
      password2: ['', [passwordValidator, compareEqual('password')]]
    });
  }

  buildEmailControl(content = '') {
    return this.fb.control(
      content, [Validators.required, Validators.email]
    );
  }

  addEmail(index: number) {
    const emails = this.form.get('emails') as FormArray;
    emails.insert(index + 1, this.buildEmailControl());
  }

  deleteEmail(index: number) {
    const emails = this.form.get('emails') as FormArray;
    emails.removeAt(index);
  }

  resetForm() {
    this.buildForm();
  }

  doSubmit(form: NgForm) {
    console.log(form);
  }


}
