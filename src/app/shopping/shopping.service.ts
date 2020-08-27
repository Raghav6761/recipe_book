import { ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredientsChanged = new Subject<ingredient[]>();
    // ingredientsChanged = new EventEmitter<ingredient[]>();
    startedEditing = new Subject<number>();

    ingredients: ingredient[] = [
        new ingredient('apples',5),
        new ingredient('tomatoes',10),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    addingredient(newIngredient:ingredient){
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, changedIngredient: ingredient){
        this.ingredients[index] = changedIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addingredients(ingredients: ingredient[]){
        this.ingredients = this.ingredients.concat(ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
        console.log("reaching here");
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}