import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  account = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: ''
  };
  constructor() { }

  ngOnInit() {
    document.body.id = '';
    document.body.className = 'bg-gradient-primary';
  }

  doSubmit(form: NgForm) {
    console.log(form);
  }

}
