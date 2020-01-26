import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-component',
  template: `
    <p>
      test-component works!
    </p>
  `,
  styles: []
})
export class TestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
