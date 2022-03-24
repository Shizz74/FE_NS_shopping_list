import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { CategoryAddFormComponent } from './category-add-form.component'

const routes: Routes = [{ path: '', component: CategoryAddFormComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class CategoryAddFormRoutingModule {}
