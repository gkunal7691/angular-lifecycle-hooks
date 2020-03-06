import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})

export class GrandChildComponent implements OnInit {

  constructor() {
    // console.log("Grand child constructor()");
  }

  ngOnInit() {
    // console.log("Grand child ngOnInit()");
  }

  ngAfterViewInit() {
    // console.log("Grand child ngAfterViewInit()");
  }

  ngAfterViewChecked() {
    // console.log("Grand child ngAfterViewChecked()");
  }
}