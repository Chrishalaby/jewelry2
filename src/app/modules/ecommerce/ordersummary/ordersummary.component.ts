import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
@Component({
  templateUrl: './ordersummary.component.html',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule],
})
export class OrderSummaryComponent {
  products = [
    {
      name: 'Cotton Sweatshirt',
      size: 'Medium',
      color: 'White',
      price: '$12',
      quantity: '1',
      image: 'assets/demo/images/ecommerce/ordersummary/order-summary-1-1.png',
    },
    {
      name: 'Regular Jeans',
      size: 'Large',
      color: 'Black',
      price: '$24',
      quantity: '1',
      image: 'assets/demo/images/ecommerce/ordersummary/order-summary-1-2.png',
    },
  ];
}
