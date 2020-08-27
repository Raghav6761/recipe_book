import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { recipeDetail } from '../recipeDetail/recipeDetail.component';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id:number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {}

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = Number(params['id']);
        this.editMode = params['id'] != null;
        console.log("aye, idhar dekh in the edit mode",this.editMode);
        this.initForm();
      }
    );
  }

  private initForm(){
    let recipeName = '';
    let recipeImPath = '';
    let recipedescription = '';
    // let recipeIngredient = [];
    let recipeIngredient = new FormArray([]);
    
    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName=recipe.name;
      recipeImPath = recipe.imagePath;
      recipedescription = recipe.description;
      // recipeIngredient = recipe.ingredients;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredient.push(
            new FormGroup({
              'name': new FormControl(ingredient.name,[Validators.required]),
              'amount': new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,[Validators.required]),
      'imPath': new FormControl(recipeImPath,[Validators.required]),
      'description': new FormControl(recipedescription,[Validators.required]),
      'ingredients': recipeIngredient,
    });
  }

  get ingredientControls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl('',Validators.required),
        'amount': new FormControl('',[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onSubmit(){
    console.log(this.recipeForm);
    const newRecipe= new Recipe(this.recipeForm.value['name'],this.recipeForm.value['description'],this.recipeForm.value['imPath'],this.recipeForm.value['ingredients']);
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,newRecipe);
    }
    else{
      this.recipeService.addRecipe(newRecipe);
    }
    // this.router.navigate(['../']);
    this.onCancel();
  }

}
