import { Component, OnInit } from '@angular/core';
import { Application, ItemEventData, Http } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RouterExtensions } from '@nativescript/angular'

import { env } from '../../environment/environment'
import { CategoryService } from '../_services/category.service'

@Component({
  selector: 'ns-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  products: any;
  

  constructor(
    private http: HttpClient,
    private catService: CategoryService,
    private routerExtensions: RouterExtensions
    ) { }

  ngOnInit(): void {
    this.catService.getAllCategories().subscribe(res => {
      this.products = res;
    })
  }


  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
    })
  }

}
