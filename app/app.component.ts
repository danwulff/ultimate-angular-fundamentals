import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <h1>{{title}}</h1>
      <input type="text" [value]="name">
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = 'Todd';
  constructor() {
    this.title = 'Ultimate Angular';
  }
}
