import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';

@Component({
  templateUrl: './shopping-cart.component.html',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule, DropdownModule],
})
export class ShoppingCartComponent {
  constructor() {}

  quantityOptions: SelectItem[] = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
  ];
}
