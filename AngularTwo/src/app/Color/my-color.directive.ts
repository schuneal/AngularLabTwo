import { Directive, Input, HostBinding, HostListener,EventEmitter } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';


@Directive({
  selector: '[appNewColor]',
  outputs:['colorEmitter']
})
export class MynewcolorDirective {
  @Input('color') nwcolor;
  @HostBinding('style.color') myColor;
  public colorEmitter;

  constructor() {
    this.colorEmitter = new EventEmitter();
   }
  // ngOnInit(){
  //   this.myColor = this.nwcolor;
  // }
  @HostListener('click') changeColor(){this.myColor=this.nwcolor;this.colorEmitter.emit(this.nwcolor);}

}