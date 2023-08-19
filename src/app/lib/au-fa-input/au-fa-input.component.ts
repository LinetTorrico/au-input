import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements OnInit {
  @Input()
  icon: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  get classes() {

    const cssClasses: { [className: string]: boolean } = {};

    if (this.icon) {
      cssClasses['fa fa-' + this.icon] = true;
    }
    console.log('my classes', cssClasses);
    return cssClasses;
  }

}
