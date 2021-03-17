import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui-component/ui.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    UiComponent,
    SidebarComponent
  ],
  declarations: [
    UiComponent,
    SidebarComponent
  ]
})
export class UiModule {}
