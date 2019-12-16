import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The World Wide Web in my eyes';

  /** Used for page routing. */
  topic = '';

  ngOnInit() {
    this.topic = '';

  }
}
