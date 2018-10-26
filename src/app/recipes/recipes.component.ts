import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  chosen_recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onShowDetail(recipe) {
    console.log(recipe);
    this.chosen_recipe = recipe;
  }

}
