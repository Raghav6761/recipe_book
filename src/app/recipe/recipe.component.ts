import {Component, OnInit, OnChanges} from '@angular/core';
import { Recipe } from './recipe.model';
// import { RecipeService } from './recipe.service';

@Component({
    selector: 'app-recipe',
    templateUrl:'./recipe.component.html',
    // providers:[RecipeService]
})

export class recipe implements OnInit, OnChanges{
    detail:Recipe;

    // constructor(private recipeService:RecipeService){}
    constructor(){}

    // detailShow(newDescription: Recipe){
        // console.log("in recipe component: ",newDescription);
        // this.detail = newDescription;
        // this.description = newDescription;
    // }

    ngOnInit(){
        // let detailId = this.recipeService.recipeDetailId
        // this.detail=this.recipeService.recipes[detailId]
        // console.log("in the recipe component:",detailId,this.detail)
        
        // this.recipeService.recipeDetail.subscribe(
        //     (recipe:Recipe)=>{
        //         this.detail=recipe
        //     }
        // );
    }
    
    ngOnChanges(){
    }
}