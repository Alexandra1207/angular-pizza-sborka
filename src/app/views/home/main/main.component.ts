import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {map, Subject, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {environment} from "../../../../environments/environment";

// declare var bootstrap: any;
// import * as bootstrap from 'bootstrap';

// import {__param} from "tslib";
// // import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  private subject: Subject<number>;

  constructor(public cartService: CartService) {
    this.subject = new Subject<number>();
    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++)
    }, 1000);
    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 4000);

  }

  private subscription: Subscription | null = null;


  ngOnInit() {

    console.log(environment.production)
    // const myModalAlternative = new bootstrap.Modal('#myModal', {});
    // myModalAlternative.show();

    this.subscription = this.subject
      .subscribe(
        {
          next: (param: number) => {
            console.log('subscriber 1: ', param);
          },
          error: (error: string) => {
            console.log('ERROR!!! ' + error);
          }
        });

  }

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit() {
    // this.popupComponent.open();
    // const modalRef = this.modalService.open(PopupComponent);
    // modalRef.componentInstance.data = 'Main component';
    // this.modalService.open(this.popup, {});
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  // test(popup: TemplateRef<ElementRef>) {
  test() {
    // this.modalService.open(this.popup, {});

    this.subject
      .pipe(
        map(number => {
          return 'Число: ' + number
        })
      )
      .subscribe((param: string) => {
        console.log('subscriber 2: ', param);

      });
  }
}
