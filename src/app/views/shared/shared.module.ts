import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { StepperMenuComponent } from './stepper-menu/stepper-menu.component';
import { StepperMenuItemComponent } from './stepper-menu/stepper-menu-item/stepper-menu-item.component';

@NgModule({
  declarations: [HeaderComponent, StepperMenuComponent, StepperMenuItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, StepperMenuComponent],
})
export class SharedModule {}
