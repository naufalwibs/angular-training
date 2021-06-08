import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AddressService {
  addressChanged = new Subject<any>();
  address: object[] = [];

  constructor(private http: HttpClient) {}

  fetchAddress() {
    this.http
      .get<any>('http://localhost:3000/address')
      .pipe(
        map((resData) => {
          console.log(resData);
          return resData;
        })
      )
      .subscribe((transformedData) => {
        this.addressChanged.next(transformedData);
      });
  }

  addAddress(input: any) {
    // console.log(input);
    this.http
      .post<any>('http://localhost:3000/address', input)
      .subscribe((response) => console.log(response));
  }

  deleteAddress(input: any) {
    // console.log(input);
    this.http
      .delete<any>('http://localhost:3000/address/' + input)
      .subscribe((response) => console.log(response));

    this.fetchAddress();
  }
}
