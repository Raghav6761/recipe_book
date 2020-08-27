import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-recipeItem',
    templateUrl:'./recipeItem.component.html',
    styleUrls:['./recipeItem.component.css']
})
export class recipeItem implements OnInit{
    @Input('recipe') recipe:Recipe;
    @Input() id:number;
    // @Input('recipe') recipe:{name:string,description:string,imagePath:string};
    @Output() details=new EventEmitter<Recipe>();

    constructor(private recipeService:RecipeService,
        private router: Router,
        private route: ActivatedRoute) {}

    // detailEmit(){
        // this.details.emit(this.recipe);
        // this.recipeService.recipeDetailShow(this.id)
        // this.recipeService.recipeDetail.emit(this.recipe)

        // this.router.navigate([this.id],{relativeTo:this.route});
    // }

    ngOnInit(){}
}