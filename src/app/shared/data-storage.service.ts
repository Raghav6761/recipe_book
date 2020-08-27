import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService){}

    storeRecipe(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://udemyproject-3334f.firebaseio.com/recipes.json',recipes)
        .subscribe(response=>{
            console.log(response);
        })
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>(
            'https://udemyproject-3334f.firebaseio.com/recipes.json'
        ).pipe(
            map(recipes=>{
                return recipes.map(recipe=>{
                    return {
                        ...recipe,
                        ingredients: recipe.ingredients ? recipe.ingredients : []
                    };
                });
            }),
            tap(recipes=>{
                this.recipeService.setRecipes(recipes);
            })
        );
    }
}