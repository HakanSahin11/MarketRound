import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

}
