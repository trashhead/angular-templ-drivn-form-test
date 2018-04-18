import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public myobject;
  @ViewChild("form") form:NgForm;

  constructor(){
    this.myobject = {
      value:""
    }
  }

  click(){
    this.myobject.value = "ABC";
  }
}
