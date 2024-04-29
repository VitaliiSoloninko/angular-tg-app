import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// | uppercase не працює
//
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent {}
