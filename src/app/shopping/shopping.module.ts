import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingComponent } from './shopping.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        ShoppingComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports:[
        // CommonModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        ShoppingRoutingModule
    ],
    // exports:[
    //     ShoppingComponent,
    //     ShoppingListComponent,
    //     ShoppingEditComponent,
    // ]
})

export class ShoppingModule{}