import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { liveSearch } from '../search-box/live-search-operator';
import { BlogService } from '../search-box/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  private userIdSubject = new Subject<string>();

  readonly blogPosts$ = this.userIdSubject.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(_id => this.blogService.fetchPosts(_id))
  );

  constructor(private blogService: BlogService) { }

  searchPosts(_id: string) {
    this.userIdSubject.next(_id);
  }

  ngOnInit(): void {}

}
