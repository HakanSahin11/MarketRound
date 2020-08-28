import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ItemService } from '../new-item/item-service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  itemForm = new FormGroup({
    Title: new FormControl(''),
    Product: new FormControl(''),
    Price: new FormControl(''),
    Descreption: new FormControl(''),
    Tags: new FormControl(''),
    
  });


  constructor(private http: HttpClient, private itemService: ItemService) { }
  onSubmit(){
    console.log(this.itemForm.value);
    this.itemService.register(this.itemForm.value)
    .subscribe(response => console.log(response)
    );
  }

  ngOnInit(): void {
  }

}
