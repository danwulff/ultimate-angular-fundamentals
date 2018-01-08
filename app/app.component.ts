import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick()">Change name</button>
      <input
        type="text"
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)">
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Todd';

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  handleClick() {
    this.name = 'Motto';
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }
}
