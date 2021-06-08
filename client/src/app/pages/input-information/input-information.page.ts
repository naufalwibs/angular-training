import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-input-information',
  templateUrl: './input-information.page.html',
  styleUrls: ['./input-information.page.scss'],
})
export class InputInformationComponent {
  receiverName1 = '';
  receiverPhoneNumber1 = '';
  receiver2Exist = false;
  receiverName2 = '';
  receiverPhoneNumber2 = '';
  province = '';
  city = '';
  suburbs = '';
  area = '';
  address = '';
  email = '';
  postalCode = '';
  setAsMainAddress = false;

  constructor(private router: Router, private adrService: AddressService) {}

  onCreateAddress() {
    if (
      this.receiverName1 &&
      this.receiverPhoneNumber1 &&
      this.province &&
      this.city &&
      this.suburbs &&
      this.area &&
      this.address &&
      this.email &&
      this.postalCode
    ) {
      this.adrService.addAddress({
        receiverName1: this.receiverName1,
        receiverPhoneNumber1: this.receiverPhoneNumber1,
        receiverName2: this.receiverName2,
        receiverPhoneNumber2: this.receiverPhoneNumber2,
        receiver2Exist: this.receiver2Exist,
        province: this.province,
        city: this.city,
        suburbs: this.suburbs,
        area: this.area,
        address: this.address,
        email: this.email,
        postalCode: this.postalCode,
        setAsMainAddress: this.setAsMainAddress,
      });
      this.router.navigate(['/address-list']);
      this.clearForm();
    } else {
      alert('Fill the empty');
    }
  }

  clearForm() {
    this.receiverName1 = '';
    this.receiverPhoneNumber1 = '';
    this.receiverName2 = '';
    this.receiverPhoneNumber2 = '';
    this.receiver2Exist = false;
    this.province = '';
    this.city = '';
    this.suburbs = '';
    this.area = '';
    this.address = '';
    this.email = '';
    this.postalCode = '';
    this.setAsMainAddress = false;
  }
}

// console.log(
//   this.receiverName1,
//   this.receiverPhoneNumber1,
//   this.receiverName2,
//   this.receiverPhoneNumber2,
//   this.receiver2Exist,
//   this.province,
//   this.city,
//   this.suburbs,
//   this.area,
//   this.address,
//   this.email,
//   this.postalCode,
//   this.setAsMainAddress
// );
