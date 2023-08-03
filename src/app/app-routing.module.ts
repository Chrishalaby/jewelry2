import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import {
  ModuleRoutes,
  ShopRoutes,
  SizesRoutes,
} from './shared/enums/routes.enum';
import { LoadedComponent } from './shared/types/general.types';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: ModuleRoutes.Shop,
        children: [
          {
            path: ShopRoutes.Checkout,
            loadComponent: () =>
              import(
                './modules/ecommerce/components/checkoutform/checkoutform.component'
              ).then((x: LoadedComponent) => x.CheckoutFormComponent),
          },
          {
            path: ShopRoutes.NewProduct,
            loadComponent: () =>
              import(
                './modules/ecommerce/components/newproduct/newproduct.component'
              ).then((x: LoadedComponent) => x.NewProductComponent),
          },
          {
            path: ShopRoutes.OrderHistory,
            loadComponent: () =>
              import(
                './modules/ecommerce/components/ordersummary/ordersummary.component'
              ).then((x: LoadedComponent) => x.OrderSummaryComponent),
          },
          {
            path: ShopRoutes.OrderSummary,
            loadComponent: () =>
              import(
                './modules/ecommerce/components/orderhistory/orderhistory.component'
              ).then((x: LoadedComponent) => x.OrderHistoryComponent),
          },
          {
            path: ShopRoutes.ProductList,
            loadComponent: () =>
              import(
                './modules/ecommerce/components/productlist/productlist.component'
              ).then((x: LoadedComponent) => x.ProductListComponent),
          },
          {
            path: ShopRoutes.ProductList,
            loadComponent: () =>
              import(
                './modules/ecommerce/components/productoverview/productoverview.component'
              ).then((x: LoadedComponent) => x.ProductOverviewComponent),
          },
          {
            path: ShopRoutes.ProductOverview,
            loadComponent: () =>
              import(
                './modules/ecommerce/components/productoverview/productoverview.component'
              ).then((x: LoadedComponent) => x.ProductOverviewComponent),
          },
          {
            path: ShopRoutes.Cart,
            loadComponent: () =>
              import(
                './modules/ecommerce/components/shopping-cart/shopping-cart.component'
              ).then((x: LoadedComponent) => x.ShoppingCartComponent),
          },
        ],
      },
      {
        path: ModuleRoutes.Sizes,
        children: [
          {
            path: SizesRoutes.RingSize,
            loadComponent: () =>
              import('./modules/sizes/ring-size/ring-size.component').then(
                (x: LoadedComponent) => x.RingSizeComponent
              ),
          },
        ],
      },
      {
        path: ModuleRoutes.Home,
        loadComponent: () =>
          import('./modules/home-page/home-page.component').then(
            (x: LoadedComponent) => x.HomePageComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
