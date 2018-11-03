import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Chicken',
      'Test chicken',
      'https://bit.ly/2ArHSZd',
      [
        new Ingredient('chicken', 1)
      ]),
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Beef',
      'Test beef',
      'https://bit.ly/2OSDaNa',
      [
        new Ingredient('Beef', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice(); // return a new array
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

}
