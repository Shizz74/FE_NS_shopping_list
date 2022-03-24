import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Category } from '../_models/category'
import { env } from '../../environment/environment'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
      private http: HttpClient
    ) { }

    getAllCategories() {
      return this.http.get(env.apiUrl + '/category');
    }

}
