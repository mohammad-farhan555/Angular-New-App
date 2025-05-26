import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { InlineComponent } from './inline/inline.component';
import { InterpolationComponent } from './interpolation/interpolation.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserComponent,InlineComponent,InterpolationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
  helloMessage()
  {
    return "Hello from app component";
  }
}
