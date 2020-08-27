import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import '@angular/compiler';
// import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { header } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
// import { ShoppingModule } from './shopping/shopping.module';
import { CoreModule } from './core.module';
// import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
// import { RecipesModule } from './recipe/recipes.module';
// import { dropdownDirective } from './shared/dropdown.directive';
// import { AuthComponent } from './auth/auth.component';
// import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
// import { AlertComponent } from './shared/alert/alert.component';
// import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
// import { SelectRecipeComponent } from './recipe/select-recipe/select-recipe.component';
// import { recipe } from './recipe/recipe.component';
// import { recipeList } from './recipe/recipeList/recipeList.component';
// import { recipeItem } from './recipe/recipeItem/recipeItem.component';
// import { recipeDetail } from './recipe/recipeDetail/recipeDetail.component';
// import { ShoppingComponent } from './shopping/shopping.component';
// import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
// import { ShoppingListService } from './shopping/shopping.service';
// import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
// import { RecipesEditComponent } from './recipe/recipes-edit/recipes-edit.component';
// import { RecipeService } from './recipe/recipe.service';
// import { AuthInterceptorService } from './auth/auth-interceptor.service';

// const appRoot: Routes=[
//   {path: '',component: recipe},
//   {path: 'shopping',component: ShoppingComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    header,
    // AuthComponent,
    // dropdownDirective,
    // LoadingSpinnerComponent,
    // PlaceholderDirective,
    // AlertComponent,
    // SelectRecipeComponent,
    // recipe,
    // recipeList,
    // recipeItem,
    // recipeDetail,
    // ShoppingComponent,
    // ShoppingListComponent,
    // ShoppingEditComponent,
    // RecipeStartComponent,
    // RecipesEditComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoot),
    // RecipesModule, ## removed because we have added lazy loading
    // ShoppingModule, ## removed because of lazy loading
    CoreModule,
    // AuthModule, ## removed because of lazy loading
    SharedModule
  ],
  providers: [
    // ShoppingListService, RecipeService,{provide: HTTP_INTERCEPTORS,useClass: AuthInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent],
  // exports:[
  //   dropdownDirective,
  //   LoadingSpinnerComponent,
  //   PlaceholderDirective,
  //   AlertComponent,
  // ]
})
export class AppModule { }
