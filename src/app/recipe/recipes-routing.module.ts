import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { recipe } from './recipe.component';
import { AuthGuard } from '../auth/auth.guard';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { recipeDetail } from './recipeDetail/recipeDetail.component';
import { RecipeResolverService } from '../recipe-resolver.service';

const routes: Routes = [
    // {path: 'recipes',component: recipe, canActivate:[AuthGuard],
    {path: '',component: recipe, canActivate:[AuthGuard],
        children:[
            {path:'', component: RecipeStartComponent, pathMatch:'full'},
            {path:'new', component: RecipesEditComponent},
            {path:':id', component: recipeDetail, resolve: [RecipeResolverService]},
            {path:':id/edit', component: RecipesEditComponent, resolve: [RecipeResolverService]}
    ]},
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})

export class RecipesRoutingModule{}