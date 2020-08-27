import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  // providers:[ShoppingListService]
})
export class ShoppingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
