import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
@Component({
  templateUrl: './productoverview.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule,
    ButtonModule,
    RippleModule,
    TabViewModule,
  ],
})
export class ProductOverviewComponent implements OnInit {
  color: string = 'bluegray';

  size: string = 'M';

  liked: boolean = false;

  images: string[] = [];

  selectedImageIndex: number = 0;

  quantity: number = 1;

  ngOnInit(): void {
    this.images = [
      'product-overview-3-1.png',
      'product-overview-3-2.png',
      'product-overview-3-3.png',
      'product-overview-3-4.png',
    ];
  }
}
