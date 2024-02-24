import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {HttpClient} from "@angular/common/http";
import {Subscription, tap} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) {
  }

  products: ProductType[] = [];
  loading: boolean = false;

  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.loading = true;

    this.subscription = this.productService.getProducts()
      .pipe(
        tap(() => {
            this.loading = false;
          })
      )

      .subscribe(
        {
          next: (data) => {
            this.products = data;
            console.log('next')
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        }
      )
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
