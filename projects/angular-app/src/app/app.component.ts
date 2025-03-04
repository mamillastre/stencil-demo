import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from '@stencil-demo/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app';
}
