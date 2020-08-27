import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping/shopping.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipeDetail',
    templateUrl : './recipeDetail.component.html',
    styleUrls: ['./recipeDetail.component.css']
})
export class recipeDetail implements OnInit{
    @Input() descriptionNew:Recipe;
    id:number;
    description="Click To View description";

    constructor(private shoppingService: ShoppingListService,
        private RecipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router){}
    

    addingToShoppingList(ingredients: ingredient[]){
        this.shoppingService.addingredients(ingredients)
    }

    ngOnInit(){
        // let id=this.route.snapshot.params['id'];
        this.route.params.subscribe(
            (params: Params)=>{
                this.id = params['id'];
                this.descriptionNew = this.RecipeService.getRecipe(this.id);
            }
        );
    }

    toEditRecipe(){
        this.router.navigate(['edit'],{relativeTo:this.route})
        // this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'})
    }

    // assign(){
        // this.description = this.descriptionNew.description;
        // this.descriptionNew.name
    // }

    // detailShow(newDescription: string){
    //     console.log("in recipeDetail: ",newDescription);
    //     this.description = newDescription;
    // }

    deleteRecipe(){
        this.RecipeService.deleteRecipe(this.id);
        this.router.navigate(['/']);
    }
}