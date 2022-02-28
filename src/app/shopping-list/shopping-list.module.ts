import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { ShoppingListRoutingModule } from './shopping-list-routing.module'
import { ShoppingListComponent } from './shopping-list.component'

@NgModule({
  imports: [NativeScriptCommonModule, ShoppingListRoutingModule],
  declarations: [ShoppingListComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ShoppingListModule {}
