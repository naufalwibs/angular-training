import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.pages.html',
  styleUrls: ['./address-list.pages.scss'],
})
export class AddressListComponent implements OnInit, OnDestroy {
  addressList = [];
  isFetching = false;
  private addressListSubs: Subscription;

  constructor(private adrService: AddressService) {}

  ngOnInit() {
    this.addressListSubs = this.adrService.addressChanged.subscribe((adr) => {
      this.addressList = adr;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.adrService.fetchAddress();
  }

  // onDeleteAddress(id: any) {
  //   // console.log(id);
  //   this.adrService.deleteAddress(id);
  // }

  ngOnDestroy() {
    this.addressListSubs.unsubscribe();
  }
}
