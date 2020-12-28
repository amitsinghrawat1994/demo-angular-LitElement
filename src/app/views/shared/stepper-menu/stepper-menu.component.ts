import { Location } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITopNavbarStep } from 'src/app/model/TopBar.model';

@Component({
  selector: 'app-stepper-menu',
  templateUrl: './stepper-menu.component.html',
  styleUrls: ['./stepper-menu.component.scss'],
})
export class StepperMenuComponent implements OnInit {
  @Input('steps') steps: ITopNavbarStep[] = [];
  //@Input('selectIndex') selectIndex = 0;
  @Input('disabled') disabled = false;
  selectIndex = 0;
  route: string = '';

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {
    this.updateRouteStatus();
  }

  updateRouteStatus(): void {
    this.router.events.subscribe((val) => {
      if (location.pathname !== '' && location.pathname !== '/') {
        let hrefPath = '';

        const pathSplitList = location.pathname.split('/');
        if (pathSplitList.length > 1) {
          hrefPath = pathSplitList[pathSplitList.length - 1];
        }

        const step = this.steps.find((x) => x.href === hrefPath);
        if (step) {
          this.selectIndex = this.steps.indexOf(step);
        }
      }
    });
  }

  isActive = (index: number): boolean => {
    const isActive =
      this.selectIndex === index ||
      (index === this.steps.length - 1 &&
        this.selectIndex > this.steps.length - 1);

    return isActive;
  };

  isVisited = (index: number) => this.selectIndex > index;

  getItemClass = (i: number) => {
    const className = this.isActive(i)
      ? 'active'
      : this.isVisited(i)
      ? 'visited'
      : 'inactive';
    return className;
  };
}
