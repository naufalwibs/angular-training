import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) {}
  productsChanged = new Subject<any>();

  fetchProducts() {
    this.http
      .get<any>('http://localhost:3000/products')
      .pipe(
        // map((resData) => {
        //   console.log(resData);
        //   return resData;
        // })
        (res) => res
      )
      .subscribe((transformedData) => {
        console.log(transformedData);
        this.productsChanged.next(transformedData);
      });
  }
}
