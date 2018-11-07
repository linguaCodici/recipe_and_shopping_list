import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingPrintComponent } from './shopping-print/shopping-print.component';
import { ShoppingListRoutingModule } from './shopping-list.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
    ShoppingPrintComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListRoutingModule
  ],
})
export class ShoppingListModule {}
