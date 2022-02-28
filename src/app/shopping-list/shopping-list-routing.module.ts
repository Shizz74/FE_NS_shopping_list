import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ShoppingListComponent } from './shopping-list.component'

const routes: Routes = [{ path: '', component: ShoppingListComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ShoppingListRoutingModule {}
