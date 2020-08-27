import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { recipe } from './recipe.component';

export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];
    // private recipes: Recipe[]=[
    //     new Recipe(
    //         'Test Recipe 1',
    //         'Description Test Recipe 1',
    //         'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
    //         [
    //             new ingredient("ingredient 1 r1",1),
    //             new ingredient("ingredient 2 r1",2)
    //         ]
    //         ),
    //     new Recipe(
    //         'Test Recipe 2',
    //         'Description Test Recipe 2',
    //         'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg',
    //         [
    //             new ingredient("ingredient 1 r2",1),
    //             new ingredient("ingredient 2 r2",3)
    //         ]
    //         ),
    //     new Recipe(
    //         'Test Recipe 3',
    //         'Description Test Recipe 3',
    //         'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/mediterranean-hummus-couscous-bowls-9aa1b9c2.jpg',
    //         [
    //             new ingredient("ingredient 1 r3",4),
    //             new ingredient("ingredient 2 r3",2)
    //         ]
    //         ),
    // ];

    getRecipes(){
        return this.recipes.slice()
    }

    // recipeDetail = new EventEmitter<Recipe>();
    // recipeDetail = new Subject<Recipe>();

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipe(id:number){
        return this.recipes[id];
    }

    recipeDetailShow(id:number){
        // this.recipeDetail;
        // console.log("recipeDetailShow: ", this.recipes[id],id)
    }
    constructor(){
        // console.log("service working")
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    
    updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index]= newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}