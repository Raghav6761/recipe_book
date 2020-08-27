import {Component, EventEmitter, Output, OnInit, OnDestroy} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class header implements OnInit, OnDestroy{
    isAuthenticated = false;
    private userSub: Subscription;
    // @Output() linkState = new EventEmitter<{recipeState:boolean,shoppingState:boolean}>();

    // stateObject = {recipeState:false,shoppingState:false};
    // link1(){
    //     this.stateObject.recipeState=true;
    //     this.stateObject.shoppingState=false;
    //     this.linkState.emit(this.stateObject);
        // this.linkState.emit({recipeState:true,shoppingState:false});
    // }
    // link2(){
    //     this.stateObject.shoppingState=true;
    //     this.stateObject.recipeState=false;
    //     this.linkState.emit(this.stateObject);
    // }

    constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

    ngOnInit(){
        this.userSub = this.authService.user.subscribe(
            user=>{
                this.isAuthenticated = !user ? false : true;
            }
        );
    }

    onSaveData(){
        this.dataStorageService.storeRecipe();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnDestroy(){
        this.userSub.unsubscribe();
    }
}