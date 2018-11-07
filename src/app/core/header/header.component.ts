import { Component } from '@angular/core';
import { RecipeService } from '../../recipes/recipe.service';
import { DataService } from '../../shared/data.service';
import { AuthService } from '../../auth/auth.service';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  authenticated: boolean;

  constructor(private recipesService: RecipeService,
    private dataService: DataService,
    private authService: AuthService) {}

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

  onLogout() {
    this.authService.logout();
    location.reload();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
 }
