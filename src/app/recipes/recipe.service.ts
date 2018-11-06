import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Chicken',
      'Test chicken',
      'https://bit.ly/2ArHSZd',
      [
        new Ingredient('chicken', 3),
        new Ingredient('broccoli', 1),
        new Ingredient('carrot', 6)
      ]),
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Beef',
      'Test beef',
      'https://bit.ly/2OSDaNa',
      [
        new Ingredient('Beef', 1),
        new Ingredient('Wine', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice(); // return a new array
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipes(recipes: Recipe[]) {
    console.log('updating: ', recipes);
    this.recipes = recipes;
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }

}
