import { Component, Input, OnInit } from '@angular/core';
import 'src/app/custom-components/wc-mood';
import 'src/app/custom-components/dropdown';
import 'src/app/custom-components/menu';
import 'src/app/custom-components/handle-event';
import { ITopNavbarStep } from './model/TopBar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  steps: ITopNavbarStep[] = [];

  ngOnInit(): void {
    this.initComponent();
  }

  initComponent(): void {
    this.steps = [
      { id: '1', href: 'home', value: 'Fluidics Startup', tabindex: 1 },
      { id: '2', href: 'news', value: 'Cleaning', tabindex: 2 },
      { id: '3', href: 'contact', value: 'Sort Nozzle', tabindex: 3 },
      { id: '4', href: 'about', value: 'Detector Setup and QC ', tabindex: 4 },
    ];
  }
}
