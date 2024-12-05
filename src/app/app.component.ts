import { Component } from '@angular/core';

import { ComponentBodyComponent } from './component-body/component-body.component';
import { ComponentFooterComponent } from './component-footer/component-footer.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentBodyComponent, ComponentFooterComponent, ComponentHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'hundirLaFlota';
}
