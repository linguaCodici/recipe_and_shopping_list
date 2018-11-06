import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-print',
  templateUrl: './shopping-print.component.html',
  styleUrls: ['./shopping-print.component.css']
})
export class ShoppingPrintComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.print();
  }

}
