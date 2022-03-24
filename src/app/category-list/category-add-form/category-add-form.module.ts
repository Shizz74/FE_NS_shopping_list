import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { CategoryAddFormRoutingModule } from './category-add-form-routing.module'
import { CategoryAddFormComponent } from './category-add-form.component'

@NgModule({
  imports: [NativeScriptCommonModule, CategoryAddFormRoutingModule],
  declarations: [CategoryAddFormComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CategoryAddFormModule {}
