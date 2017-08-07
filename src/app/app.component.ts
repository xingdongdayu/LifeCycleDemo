import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ryan';

  greeting: string = "Hello";
  user: {name: string} = {name: "Ryan"};
}
