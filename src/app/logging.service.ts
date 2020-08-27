import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})


// //
// This service is for understanding role and availability of service in different types of loading:
// 4 types of module loading:   1. app.module->application wide  2. component.module->component wide  3. eager-loading.module->application wide  4. lazy loading.module->component wide
// //

export class LoggingService{
    lastLog: string;

    printLog(message:string){
        console.log(message);
        console.log(this.lastLog);
        this.lastLog = message;
    }
}