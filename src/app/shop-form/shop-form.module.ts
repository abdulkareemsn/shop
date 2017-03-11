import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopFormComponent } from './shop-form/shop-form.component';
import {SHOPFORMBUILDERSERVICE_PROVIDER} from './shop-form-builder.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import { InsertShopFormComponent } from './shop-form/insert-shop-form/insert-shop-form.component';
import { ViewShopFormComponent } from './shop-form/view-shop-form/view-shop-form.component';
import {ShopFormRoutingModule} from './shop-form.router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ShopFormRoutingModule
  ],
  declarations: [ShopFormComponent, InsertShopFormComponent, ViewShopFormComponent],
  providers:[SHOPFORMBUILDERSERVICE_PROVIDER]
})
export class ShopFormModule { }