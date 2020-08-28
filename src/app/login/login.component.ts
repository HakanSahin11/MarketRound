import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeClick= function () {
    this.router.navigateByUrl('/register')
  };

}
