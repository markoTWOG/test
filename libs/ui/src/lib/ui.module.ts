import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui-component/ui.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    UiComponent
  ],
  declarations: [
    UiComponent
  ]
})
export class UiModule {}
