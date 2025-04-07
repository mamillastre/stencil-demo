import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButton, MyComponent, MyIcon } from '@stencil-demo/angular';
import { circleUser } from '@stencil-demo/elements/icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyComponent, MyButton, MyIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app';

  circleUserIcon = circleUser;
}
