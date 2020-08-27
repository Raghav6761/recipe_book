import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
// import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        AuthComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule,
        AuthRoutingModule,
        SharedModule
    ],
    exports:[
        AuthComponent
    ]
})

export class AuthModule{}