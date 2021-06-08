import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: {
    id: number;
    name: string;
    price: number;
    category: string;
    imageUrl: string;
  };
  constructor() {}

  priceConverter() {
    new Intl.NumberFormat('id-Rp', {
      style: 'currency',
      currency: 'IDR',
    }).format(this.product.price);
  }

  ngOnInit() {}
}
