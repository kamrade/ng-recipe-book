import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClicked(value: string) {
    console.log("value = ", value);
  }
  test(value: any) {
    console.dir(value);
  }
}
