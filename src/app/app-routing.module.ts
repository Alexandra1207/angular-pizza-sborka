import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./views/layout.component";
// import {MainComponent} from "./views/home/main/main.component";
// import {AboutComponent} from "./views/home/about/about.component";
// import {OrderComponent} from "./views/order/order.component";
// import {ProductsComponent} from "./views/products/products/products.component";
// import {ProductComponent} from "./views/products/product/product.component";
// import {AuthGuard} from "./core/auth/auth.guard";

const routes: Routes = [

  // для ленивой загрузки
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./views/home/home.module').then((m => m.HomeModule))},
      {path: 'order', loadChildren: () => import('./views/order/order.module').then((m => m.OrderModule))},
      {path: 'products', loadChildren: () => import('./views/products/products.module').then((m => m.ProductsModule))},
      // {path: 'products/:id', loadChildren: () => import('./views/products/products.module').then((m => m.ProductsModule))},
    ]
  },


  {path: 'pizzas', redirectTo: 'products'},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
