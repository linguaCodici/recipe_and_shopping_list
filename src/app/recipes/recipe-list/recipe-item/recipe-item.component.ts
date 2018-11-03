import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // recipe: Recipe;
  @Input() recipe: Recipe;
  @Input() id: number;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log(this.id);
  }

  // showDetailFired() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
