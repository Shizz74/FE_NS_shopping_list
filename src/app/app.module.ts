import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
import { NativeScriptHttpClientModule } from '@nativescript/angular'
import { DropDownModule } from "nativescript-drop-down/angular";

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    AppRoutingModule, 
    NativeScriptModule, 
    NativeScriptUISideDrawerModule, 
    NativeScriptHttpClientModule,
    DropDownModule,
  ],
  declarations: [
    AppComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
