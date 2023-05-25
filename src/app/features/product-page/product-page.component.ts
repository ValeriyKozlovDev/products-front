import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SharedModule } from '../../shared/shared.module';
import { EditComponent } from '../../shared/edit/edit.component';
import { IProduct } from '../products/interfaces/products.interfaces';
import { ProductsFeature } from '../products/store/products.reducer';
import { getFullProduct } from '../products/store/products.actions';
import { environment } from '../../../environments/environment';

@Component({
  standalone: true,
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  imports: [
    CommonModule,
    SharedModule,
    EditComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent implements OnInit {
  private _store = inject(Store)
  private _router = inject(Router)

  public url: string = environment.baseUrl.slice(0, environment.baseUrl.length - 3);

  public product$: Observable<IProduct | null> = this._store.select(ProductsFeature.selectProduct);
  public isLoading$: Observable<boolean> = this._store.select(ProductsFeature.selectIsLoading);

  public ngOnInit(): void {
    let route = this._router.url.split('/');
    this._store.dispatch(getFullProduct({ id: +route[route.length - 1] }));
  };
}

