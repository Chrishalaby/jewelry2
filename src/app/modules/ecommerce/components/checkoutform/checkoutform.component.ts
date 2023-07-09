import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkoutform.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    RippleModule,
    CommonModule,
  ],
})
export class CheckoutFormComponent {
  quantities: number[] = [1, 1, 1];

  value: string = '';

  checked: boolean = true;

  checked2: boolean = true;

  cities = [
    { name: 'USA / New York', code: 'NY' },
    { name: 'Italy / Rome', code: 'RM' },
    { name: 'United Kingdoom / London', code: 'LDN' },
    { name: 'Turkey / Istanbul', code: 'IST' },
    { name: 'France / Paris', code: 'PRS' },
  ];

  selectedCity: string = '';
}
