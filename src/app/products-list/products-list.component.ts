import { Component, OnInit } from '@angular/core';
import { Application, Http } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { ItemEventData } from '@nativescript/core'
import { env } from '../../environment/environment'

import { Product } from '../_models/product'

@Component({
  selector: 'ns-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product = new Product();

  constructor() { }

  ngOnInit(): void {

    Http.getJSON(env.apiUrl + '/products').then(
  (result: any) => {
    this.products = result;
    console.log(this.products);
  },
  e => {}
)
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onItemTap(args: ItemEventData) {
    console.log(
      `Index: ${args.index}; View: ${args.view} ; Item: ${this.products[args.index]}`
    )
  }

}
