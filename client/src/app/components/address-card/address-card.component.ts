import { Component, Input, OnInit } from '@angular/core';

import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class AddressCardComponent implements OnInit {
  @Input() adr: {
    id: number;
    receiverName1: string;
    receiverPhoneNumber1: string;
    receiver2Exist: boolean;
    receiverName2: string;
    receiverPhoneNumber2: string;
    province: string;
    city: string;
    suburbs: string;
    area: string;
    address: string;
    email: string;
    postalCode: string;
    setAsMainAddress: boolean;
  };
  constructor(private adrService: AddressService) {}

  onDeleteAddress(id: any) {
    // console.log(id);
    this.adrService.deleteAddress(id);
  }

  ngOnInit() {}
}
