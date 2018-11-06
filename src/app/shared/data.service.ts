import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { map} from 'rxjs/operators';

@Injectable()
export class DataService {
  baseUri = 'https://recipe-book-66dce.firebaseio.com/recipes.json';

  constructor(private http: Http) {}

  saveData(recipes: Recipe[]) {
    return this.http.put(this.baseUri, recipes);
  }

  fetchData() {
    return this.http.get(this.baseUri)
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
