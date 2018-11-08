import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { map} from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataService {
  baseUri = 'https://recipe-book-prod.firebaseio.com/recipes.json';

  constructor(private http: Http,
    private authService: AuthService) {}

  saveData(recipes: Recipe[]) {
    const token = this.authService.getToken();

    return this.http.put(this.baseUri + '?auth=' + token, recipes);
  }

  fetchData() {
    const token = this.authService.getToken();

    return this.http.get(this.baseUri + '?auth=' + token)
      .pipe(
        map((data) => {
          const recipes = data.json();
          // tslint:disable-next-line:prefer-const
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      );
  }
}
