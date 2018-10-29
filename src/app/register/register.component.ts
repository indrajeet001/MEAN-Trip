import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // registerForm: FormGroup;
  loading = false;
  submitted = false;
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  constructor(private formBuilder: FormBuilder, private router: Router ) {}

  ngOnInit() {
     this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      mobile: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
  });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
     this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

  }
}
