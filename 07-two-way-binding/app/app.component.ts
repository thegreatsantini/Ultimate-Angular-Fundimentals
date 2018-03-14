import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
    <button 
      (click)="handleClick()">
        Change name
    </button>
    <input  
      type='text'
      [ngModel]="name"
      (ngModelChange)="handleChange($event)"
      >
      <input  
      type='text'
      [(ngModel)]="name"
      (ngModelChange)="handleChange($event)"
      >
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = "Todd";
  handleChange(value: string) {
    this.name = value;
  }
  handleClick() {
    this.name = "Motto";
  }
}
