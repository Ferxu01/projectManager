import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project manager';

  pages = [
    {
      name: 'home',
      url: '/projects'
    }
  ];
}
