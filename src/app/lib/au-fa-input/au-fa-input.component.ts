import {Component, ContentChild, Input, OnInit, AfterContentInit, HostBinding} from '@angular/core';
import {InputRefDirective} from "../common/input-ref.directive";

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {
  @Input()
  icon: string | undefined;
  @ContentChild(InputRefDirective)
  input: InputRefDirective | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log('input', this.input);
    if(!this.input){
      console.error('Error no exist')
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input? this.input.focus : false;
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
