import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})

export class AuthComponent implements OnDestroy{
    isLoginMode = true;
    isLoading = false;
    error: string = null;
    // using the directive here will ensure that viewChild looks for the first occurence of this directive
    // @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;
    private closeSub: Subscription;

    constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver, private viewContainer: ViewContainerRef){}

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm){
        if(form.invalid){
            return;
        }
        let email = form.value.email;
        let password = form.value.password;

        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;  
        if(this.isLoginMode){
            authObs = this.authService.login(email,password);
            // this.authService.login(email,password).subscribe(
            //     responseData=>{
            //         console.log(responseData);
            //         this.isLoading = false;
            //     },
            //     errorMessage=>{
            //         this.error = errorMessage;
            //         this.isLoading = false;
            //     }
            // );
        }
        else{
            authObs = this.authService.signup(email,password);
            // this.authService.signup(email,password).subscribe(
                // responseData=>{
                    // console.log(responseData);
                    // this.isLoading=false;
                // },
                // errorMessage=>{
                    // console.log(errorMessage);
                    // this.error = errorMessage;
                    // switch (errorMessage.error.error.message) {
                    //     case "EMAIL_EXISTS":
                    //         this.error = "This Email already exists";
                    //         break;
                    
                    //     default:
                    //         this.error = "An Error Occured!";
                    //         break;
                    //     }
                    // this.error = "An Error Occured!" + errorMessage.error.error.message;
                    // this.isLoading=false;
                // }
            // );
            // console.log(form.value);
        }
        authObs.subscribe(
            responseData=>{
                console.log(responseData);
                this.isLoading = false;
                this.router.navigate(['/recipes']);
            },
            errorMessage=>{
                console.log(errorMessage);
                this.error = errorMessage;
                // imperative method call Start
                this.showErrorAlert(errorMessage);
                // imperative method call End
                this.isLoading = false;
            }
        );
        form.reset();
    }

    onCloseCall(){
        this.error = null;
    }

    // The imperative approach instead of using ngIf, not recommended* but can be used in case mandatory
    private showErrorAlert(message: string){
        const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        // const hostViewContainerRef = this.alertHost.viewContainerRef;
        const hostViewContainerRef = this.viewContainer;
        hostViewContainerRef.clear();

        const componentRef =  hostViewContainerRef.createComponent(alertComponentFactory);

        componentRef.instance.message=message;
        this.closeSub = componentRef.instance.close.subscribe(()=>{
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }

    ngOnDestroy(){
        if(this.closeSub){
            this.closeSub.unsubscribe();
        }
    }
}