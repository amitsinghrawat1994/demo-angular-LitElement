import { Component } from '@angular/core';
import 'src/app/custom-components/wc-mood';
import 'src/app/custom-components/dropdown';
import 'src/app/custom-components/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular and LitElement';
}
