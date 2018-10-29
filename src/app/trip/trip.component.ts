import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  tripForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.tripForm = this.formBuilder.group({
      tripcreator: ['', Validators.required],
      depart: ['', Validators.required],
      destination: ['', Validators.required],
      sdate: ['', Validators.required],
      edate: ['', Validators.required],
      travelers: ['', Validators.required],
      image: ['', Validators.required]
    });
  }
// convenience getter for easy access to form fields
get f() { return this.tripForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.tripForm.invalid) {
      return;
  }
}
}
