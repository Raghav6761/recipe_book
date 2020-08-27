import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { recipe } from './recipe.component';
import { recipeList } from './recipeList/recipeList.component';
import { recipeItem } from './recipeItem/recipeItem.component';
import { recipeDetail } from './recipeDetail/recipeDetail.component';
// import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        recipe,
        recipeItem,
        recipeList,
        recipeDetail,
        RecipeStartComponent,
        RecipesEditComponent,
        SelectRecipeComponent
    ],
    imports:[
        // commonModule is added in place of browserModule since they both give ngIg and ngFor but browserModule has some stuff that should initialized only once
        // CommonModule,
        // FormsModule,
        ReactiveFormsModule,
        RouterModule,
        RecipesRoutingModule,
        // this one holds commonModule now
        SharedModule
    ],
    // Export is no longer needed because all the components here are being used among themselves and require nothing from outside, including the routing
    // because no component or child component needs these components anymore
    // exports:[
    //     recipe,
    //     recipeList,
    //     recipeList,
    //     recipeDetail,
    //     RecipeStartComponent,
    //     RecipesEditComponent,
    // ]
})

export class RecipesModule {}