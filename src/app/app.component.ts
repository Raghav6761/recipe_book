import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService, private loggingService: LoggingService){}

  // recipeShow = true;
  // shoppingShow = false;
  // showHideLink(linkState: {recipeState:boolean,shoppingState:boolean}){
  //   this.recipeShow = linkState.recipeState;
  //   this.shoppingShow = linkState.shoppingState;
  // }

  ngOnInit(){
    this.authService.autoLogin();
    this.loggingService.printLog('Hello from Appcomponent ngOnint')
  }
}
