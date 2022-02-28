import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { ProductsListRoutingModule } from './products-list-routing.module'
import { ProductsListComponent } from './products-list.component'

@NgModule({
  imports: [NativeScriptCommonModule, ProductsListRoutingModule],
  declarations: [ProductsListComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProductsListModule {}
