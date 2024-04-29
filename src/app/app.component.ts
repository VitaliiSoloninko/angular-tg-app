import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// | uppercase не працює
//
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>{{ title }}</h1>
    <button (click)="title = 'new title'">Change title</button>
    <ul>
      @for (item of items; track item) {
      <li>{{ item }}</li>
      } @if (title === 'new title') {
      <hr />
      }
    </ul>
  `,
})
export class AppComponent {
  title = 'angular-tg-app!';
  items = [1, 2, 3, 4, 5];
}
