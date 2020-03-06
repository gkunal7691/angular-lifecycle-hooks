import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges, OnInit {
  title = 'hook';
  private appNumber: number = 10;
  myName: string = "Name with string";
  childVisibilty: boolean;
  childShowHide: string;

  user = {
    myName: "Name with object"
  }

  increment() {
    this.appNumber++;
  }

  decrement() {
    this.appNumber--;
  }

  constructor() {
    // console.log("app constructor()");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("app comp ngOnChanges", changes);
  }

  ngOnInit() {
    console.log("app ngOnInit()-->");
    this.childVisibilty = true;
    this.childShowHide = "Hide Child Comp";
  }

  updateName() {
    this.myName = "Rajesh Maharana string";
    this.user.myName = "Rajesh Maharana object";
  }

  updateVisibilty() {
    this.childVisibilty = !this.childVisibilty;
    if (!this.childVisibilty)
      this.childShowHide = "Show Child Comp";
    else if (this.childVisibilty)
      this.childShowHide = "Hide Child Comp";
  }
}