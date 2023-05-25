import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../../shared/shared.module';
import { IProduct } from '../../interfaces/products.interfaces';
import { environment } from '../../../../../environments/environment';

@Component({
  standalone: true,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [SharedModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  public url: string = environment.baseUrl.slice(0, environment.baseUrl.length - 3)

  @Input() product!: IProduct
}
