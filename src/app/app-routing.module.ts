import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  // { path: '', redirectTo: '/shopping-lists', pathMatch: 'full' },
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  {
    path: 'shopping-lists',
    loadChildren: () => import('~/app/shopping-list/shopping-list.module').then((m) => m.ShoppingListModule),
  },
  {
    path: 'products',
    loadChildren: () => import('~/app/products-list/products-list.module').then((m) => m.ProductsListModule),
  },
  {
    path: 'category',
    loadChildren: () => import('~/app/category-list/category-list.module').then((m) => m.CategoryListModule),
  },
  {
    path: 'search',
    loadChildren: () => import('~/app/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'featured',
    loadChildren: () => import('~/app/featured/featured.module').then((m) => m.FeaturedModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/settings/settings.module').then((m) => m.SettingsModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
