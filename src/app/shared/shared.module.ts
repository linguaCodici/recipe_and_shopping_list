import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropDownDirective } from './dropdown.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropDownDirective
  ],
  exports: [
    CommonModule,
    DropDownDirective,
    FormsModule
  ]
})
export class SharedModule {
}
