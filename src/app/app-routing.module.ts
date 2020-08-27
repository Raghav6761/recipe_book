import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
// import { ShoppingComponent } from './shopping/shopping.component';
// import { recipe } from './recipe/recipe.component';
// import { recipeDetail } from './recipe/recipeDetail/recipeDetail.component';
// import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
// import { RecipesEditComponent } from './recipe/recipes-edit/recipes-edit.component';
// import { RecipeResolverService } from './recipe-resolver.service';
// import { AuthComponent } from './auth/auth.component';
// import { AuthGuard } from './auth/auth.guard';

const appRoutes:Routes =[
    {path: '', redirectTo:'/recipes',pathMatch:'full'},
    // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}
    // Alterantive Syntax in the newer versions of angular
    { path: 'recipes', loadChildren: () => import('./recipe/recipes.module').then(m=>m.RecipesModule)},
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)},
    { path: 'shopping', loadChildren: () => import('./shopping/shopping.module').then(m=>m.ShoppingModule)}
    // {path: 'recipes',component: recipe, canActivate:[AuthGuard],
    //     children:[
    //         {path:'', component: RecipeStartComponent, pathMatch:'full'},
    //         {path:'new', component: RecipesEditComponent},
    //         {path:':id', component: recipeDetail, resolve: [RecipeResolverService]},
    //         {path:':id/edit', component: RecipesEditComponent, resolve: [RecipeResolverService]}
    // ]},
    // {path: 'shopping',component: ShoppingComponent},
    // {path: 'auth',component: AuthComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRoutingModule{}