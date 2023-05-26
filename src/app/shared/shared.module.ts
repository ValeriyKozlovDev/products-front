import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { LoaderComponent } from './loader/loader.component';
import { ErrorHandlingDirective } from './directives/error-handling.directive';

@NgModule({
  declarations: [

    ErrorHandlingDirective
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgOptimizedImage,
    MatCardModule,
    LoaderComponent,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgOptimizedImage,
    MatCardModule,
    LoaderComponent,
    ErrorHandlingDirective,
  ]
})
export class SharedModule { }
