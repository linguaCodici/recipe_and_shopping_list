import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingPrintComponent } from './shopping-print/shopping-print.component';

const slRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent, children: [
      { path: 'edit', component: ShoppingEditComponent },
      { path: 'print', component: ShoppingPrintComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(slRoutes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule {}
