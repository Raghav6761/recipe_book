import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  // @ViewChild('nameInput',{static:true}) nameInput: ElementRef;
  // @ViewChild('amountInput',{static:true}) amountInput: ElementRef;
  // @Output() ingredientAdd = new EventEmitter<ingredient>();
  // @Output() ingredientAdd = new EventEmitter<{nameInput: string, amountInput: number}>();
  subscription: Subscription;
  editMode= false;
  editItemIndex: number;
  editedItem: ingredient;
  @ViewChild('ShoppingForm') sForm:NgForm;

  onAdd(form: NgForm){
    const value = form.value;
    const toAdd =new ingredient(value.name,value.amount);
    // const toAdd =new ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value);
    // this.toAdd(this.nameInput,this.amountInput)
    // this.ingredientAdd.emit(toAdd)

    if(this.editMode){
      this.shoppingService.updateIngredient(this.editItemIndex,toAdd);
    }
    else{
      this.shoppingService.addingredient(toAdd)
    }

    this.sForm.reset();
    this.editMode=false
  }

  onClear(){
    this.sForm.reset();
    this.editMode=false;
  }

  onDelete(){
    let itemToDelete = this.editItemIndex;
    this.shoppingService.deleteIngredient(itemToDelete);
    this.onClear();
  }

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number)=>{
        this.editMode = true;
        this.editItemIndex = index;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.sForm.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount,
        });
      }
    );
  }

  ngAfterViewInit(){
    // console.log(this.nameInput.nativeElement);
    // console.log(this.amountInput);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
