import {
  Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() childNumber: number;
  @Input() parentName: any;

  constructor() {
    console.log("child constructor()");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("child ngOnChanges", changes);
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      // console.log("child ngOnChanges()", propertyName + ': Current Value = ' + current + ', Previous Value = ' + previous);
    }
  }

  ngOnInit() {
    console.log("child ngOnInit() value =", this.childNumber);
  }

  ngDoCheck() {
    console.log("child ngDoCheck()", this.parentName);
  }

  ngAfterContentInit() {
    console.log("child ngAfterContentInit()");
  }

  ngAfterContentChecked() {
    console.log("child ngAfterContentChecked()");
  }

  ngAfterViewInit() {
    console.log("child ngAfterViewInit()");
  }

  ngAfterViewChecked() {
    console.log("child ngAfterViewChecked()");
  }

  ngOnDestroy() {
    console.log("child ngOnDestroy()");
  }
}