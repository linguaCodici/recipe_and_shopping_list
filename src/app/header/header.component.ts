import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() display = new EventEmitter<{
        recipeActive: boolean,
        shoppingActive: boolean
    }>();

    setRecipe() {
        console.log('recipe clicked');
        this.display.emit({
            recipeActive: true,
            shoppingActive: false
        });
    }

    setShoppingList() {
        console.log('shopping list clicked');
        this.display.emit({
            recipeActive: false,
            shoppingActive: true
        });
    }
}
