import { TuiRootModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
// import { HeaderComponent } from './components/common/header/header.component';
// import { FooterComponent } from './components/common/footer/footer.component';
// import { CoolInputDirective } from './shared/directives/cool-input.directive';
// import { IsChickenDirective } from './shared/directives/is-chicken.directive';
// import { ChickenDescriptionPipe } from './shared/pipes/chicken-description.pipe';
// import { ChickenProductsPipe } from './shared/pipes/chicken-products.pipe';
// import {ProductService} from "./shared/services/product.service";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {ProductsModule} from "./views/products/products.module";
import {HomeModule} from "./views/home/home.module";
import {OrderModule} from "./views/order/order.module";
import {SharedModule} from "./shared/shared.module";
import {HeaderComponent} from "./shared/layout/header/header.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import { LayoutComponent } from './views/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    // CoolInputDirective,
    // IsChickenDirective,
    // ChickenDescriptionPipe,
    // ChickenProductsPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    // ProductsModule,
    // HomeModule,
    // OrderModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
      TuiRootModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
