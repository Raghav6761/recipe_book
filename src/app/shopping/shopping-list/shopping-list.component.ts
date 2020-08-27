import { Component, OnInit, OnDestroy } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping.service';
import { VirtualTimeScheduler, Subscription } from 'rxjs';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: ingredient[];
  private igChangeSubject:Subscription;
  // ingredients: ingredient[] = [
  //   new ingredient('apples',5),
  //   new ingredient('tomatoes',10),
  // ];

  // adding(data:ingredient){
  //   console.log(data)
  //   this.ingredients.push(data)
  // }

  constructor(private shoppingService: ShoppingListService, private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.igChangeSubject = this.shoppingService.ingredientsChanged.subscribe(
      (changedIngredients: ingredient[])=>{
        this.ingredients = changedIngredients;
      }
    );
    this.loggingService.printLog('Hello from shopping-list Component ngOnint');
  }

  onEditItem(i:number){
    this.shoppingService.startedEditing.next(i);
  }

  ngOnDestroy(){
    this.igChangeSubject.unsubscribe();
  }

}
