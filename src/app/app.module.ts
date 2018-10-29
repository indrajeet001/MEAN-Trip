import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TripComponent } from './trip/trip.component';
import { TripExpenseComponent } from './trip-expense/trip-expense.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { MatDatepickerModule } from '@angular/material/datepicker';




const routes: Routes = [
  {
    path: 'login', // localhost:4200/login
    component : LoginComponent
  },
  {
    path: 'register', // localhost:4200/register
    component : RegisterComponent
  },
  {
    path: 'home', // localhost:4200/Home
    component : HomeComponent
  },
  {
    path: 'trip', // localhost:4200/trip
    component : TripComponent
  },
  {
    path: 'trip-expense', // localhost:4200/trip-expanse
    component : TripExpenseComponent
  },
  {
    path: 'about', // localhost:4200/about
    component : AboutComponent
  },
  {
    path: '', // localhost:4200/Home
    component : LoginComponent
  },
];

@NgModule({
  exports: [
    RouterModule,
  ],

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TripComponent,
    TripExpenseComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatButtonModule, MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
