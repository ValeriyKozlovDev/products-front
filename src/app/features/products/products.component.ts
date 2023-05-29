import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatMenuTrigger } from '@angular/material/menu';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProductsFeature } from './store/products.reducer';
import { deleteProduct, getAllProducts } from './store/products.actions';
import { IProduct, IPriceFilter } from './interfaces/products.interfaces';
import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { EditComponent } from '../../shared/edit/edit.component';
import { TextInputComponent } from '../../shared/text-input/text-input.component';
import { SORTING } from './constance/sorting.constance';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [
    CommonModule,
    SharedModule,
    ProductComponent,
    EditComponent
  ],
  providers: [
    TextInputComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  private _store = inject(Store);

  public products$: Observable<IProduct[]> = this._store.select(ProductsFeature.selectProducts);
  public isLoading$: Observable<boolean> = this._store.select(ProductsFeature.selectIsLoading);

  public sorting = 'default';
  public sortingParams = SORTING;
  public filters: IPriceFilter | null = null
  public priceForm!: FormGroup;

  @ViewChild("clickMenuTrigger", { static: false }) clickMenuTrigger!: MatMenuTrigger;

  public ngOnInit(): void {
    this._store.dispatch(getAllProducts());
    this._initForm();

  };

  public deleteProduct(id: number): void {
    this._store.dispatch(deleteProduct({ data: id }))
  };

  public closeMenu(): void {
    this.clickMenuTrigger.closeMenu();
  };

  private _initForm(): void {
    this.priceForm = new FormGroup({
      min: new FormControl(1000, [Validators.required]),
      max: new FormControl(9000, [Validators.required]),
    });
  }

  submitPriceForm(): void {
    if (this.priceForm.invalid) {
      return
    }
    this.filters = {
      min: this.priceForm.value.min,
      max: this.priceForm.value.max
    }
  }

  public cancelPrice() {
    this.filters = null
  }
}
