import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { dropdownDirective } from './dropdown.directive';

@NgModule({
    declarations:[
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        dropdownDirective
    ],
    imports:[
        CommonModule
    ],
    exports:[
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        dropdownDirective,
        CommonModule
    ],
    entryComponents:[
        AlertComponent
    ],
})

export class SharedModule{}