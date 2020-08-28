import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataService } from '../register/data.service';
import { postData } from '../register/post-data';
import { HttpClient } from '@angular/common/http'
import { FormGroup } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    phonenumber: new FormControl(''),
    postalcode: new FormControl('')
    
  });


  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.dataService.register(this.registrationForm.value)
    .subscribe(response => console.log(response)
    );
  }
}


