import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
    selector:'app-recipeList',
    templateUrl: './recipeList.component.html'
})
export class recipeList implements OnInit, OnDestroy{
    subscription: Subscription;
    // @Output() Detail = new EventEmitter<Recipe>();
    // detailShow(Detailnew:Recipe){
    //     console.log("in recipeList Component: ",Detailnew);
    //     this.Detail.emit(Detailnew);
    // }

    constructor(private recipeService:RecipeService){}

    recipes: Recipe[];
    // [
    //     new Recipe('Test Recipe 1','Description Test Recipe 1','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'),
    //     new Recipe('Test Recipe 2','Description Test Recipe 2','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg'),
    //     new Recipe('Test Recipe 3','Description Test Recipe 3','https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/mediterranean-hummus-couscous-bowls-9aa1b9c2.jpg'),
    // ];

    ngOnInit(){
        this.subscription = this.recipeService.recipesChanged.subscribe(
            (recipes: Recipe[])=>{
                this.recipes = recipes;
            }
        );
        this.recipes = this.recipeService.getRecipes();
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}