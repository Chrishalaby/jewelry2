import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
@Component({
  templateUrl: './productlist.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RippleModule,
    DataViewModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
  ],
})
export class ProductListComponent implements OnInit {
  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = '';
  originalProducts: any[] = [];
  products: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];

    // this.originalProducts = getData();
    this.products = [...this.originalProducts];
  }

  onSortChange(event: any) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    if (!filterValue) {
      this.products = [...this.originalProducts]; // if no filter, use original data
    } else {
      filterValue = filterValue.toLowerCase();
      this.products = this.originalProducts.filter((product) =>
        product.name.toLowerCase().includes(filterValue)
      );
    }
  }
}
