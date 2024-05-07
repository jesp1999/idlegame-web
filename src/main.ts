import { enableProdMode } from '@angular/core';
import { appConfig } from "./app/app.config";
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";


//enableProdMode(); //Uncomment for production
bootstrapApplication(AppComponent, appConfig)
  .then((success: any) => console.log('App bootstrapped'))
  .catch((err: any) => console.error(err));
