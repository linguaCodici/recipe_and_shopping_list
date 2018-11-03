import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
// import { Route } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // chosen_recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.chosen_recipe = recipe;
    //   }
    // );
    // console.log(this.route.data['id']);
    // this.chosen_recipe = this.recipeService.getRecipe(+this.route.data['id']);
  }

}
