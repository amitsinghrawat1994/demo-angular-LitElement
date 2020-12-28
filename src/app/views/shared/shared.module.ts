import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { StepperMenuComponent } from './stepper-menu/stepper-menu.component';

@NgModule({
  declarations: [HeaderComponent, StepperMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, StepperMenuComponent],
})
export class SharedModule {}
