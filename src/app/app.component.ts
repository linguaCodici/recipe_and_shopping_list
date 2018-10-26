import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  displayRecipe: boolean;
  displayShoppingList: boolean;

  onEventDisplay(display) {
    this.displayRecipe = display.recipeActive;
    console.log(this.displayRecipe);
    this.displayShoppingList = display.shoppingActive;
    console.log(this.displayShoppingList);
  }
}
