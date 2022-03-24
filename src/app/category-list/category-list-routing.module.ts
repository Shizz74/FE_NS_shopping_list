import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { CategoryListComponent } from './category-list.component'

const routes: Routes = [
  { path: '', component: CategoryListComponent },
  {
    path: 'add',
    loadChildren: () => import('~/app/category-list/category-add-form/category-add-form.module').then((m) => m.CategoryAddFormModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class CategoryListRoutingModule {}
