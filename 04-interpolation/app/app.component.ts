import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
     <div> 
        {{ numberOne + numberTwo }}
        </div>
        <div>
        {{ isHappy ? ':)' : ':(' }}
        </div>
    </div>
  `
})
export class AppComponent {
  title: string;
  numberOne: number = 1;
  isHappy: boolean = true;
  numberTwo: number = 2;
  constructor() {
    this.title = "Ultimate Angular";
  }
}
