import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { DataService } from '../shared/data.service';
import { Recipe } from '../recipes/recipe.model';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor(private recipesService: RecipeService,
    private dataService: DataService) {}

  onSaveData() {
    this.dataService.saveData(this.recipesService.getRecipes())
      .subscribe(
        (res) => {
          console.log(res);
        }
      );
  }

  onGetData() {
    this.dataService.fetchData()
      .subscribe(
        (data) => {
          this.recipesService.updateRecipes(data);
        }
      );
  }
}
