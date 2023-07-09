import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  ngOnInit() {
    this.model = [
      {
        label: 'Dashboards',
        icon: 'pi pi-home',
        routerLink: ['/'],
      },
      {
        label: 'E-Commerce',
        icon: 'pi pi-fw pi-wallet',
        items: [
          {
            label: 'Product Overview',
            icon: 'pi pi-fw pi-image',
            routerLink: ['shop/product-overview'],
          },
          {
            label: 'Product List',
            icon: 'pi pi-fw pi-list',
            routerLink: ['shop/product-list'],
          },
          {
            label: 'New Product',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['shop/new-product'],
          },
          {
            label: 'Shopping Cart',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['shop/shopping-cart'],
          },
          {
            label: 'Checkout Form',
            icon: 'pi pi-fw pi-check-square',
            routerLink: ['shop/checkout-form'],
          },
          {
            label: 'Order History',
            icon: 'pi pi-fw pi-history',
            routerLink: ['shop/order-history'],
          },
          {
            label: 'Order Summary',
            icon: 'pi pi-fw pi-file',
            routerLink: ['shop/order-summary'],
          },
        ],
      },
    ];
  }
}
