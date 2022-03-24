import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { CategoryListRoutingModule } from './category-list-routing.module'
import { CategoryListComponent } from './category-list.component'

@NgModule({
  imports: [NativeScriptCommonModule, CategoryListRoutingModule],
  declarations: [CategoryListComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CategoryListModule {}
