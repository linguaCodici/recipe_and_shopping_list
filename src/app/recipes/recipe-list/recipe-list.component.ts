import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Chicken',
      'Test chicken',
      'https://bit.ly/2ArHSZd'),
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Beef',
      'Test beef',
      'https://bit.ly/2OSDaNa')
  ];

  @Output() showDetail = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onShowDetail(recipe: Recipe) {
    this.showDetail.emit(recipe);
    console.log('show from shopping list');
  }

}
