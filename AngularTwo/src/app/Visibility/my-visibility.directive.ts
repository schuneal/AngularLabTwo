import { Directive, ElementRef, Renderer2, HostBinding, Input, HostListener } from "@angular/core";

@Directive({
    selector: '[appMyVisibility]'
})
export class MyVisibility {
    constructor(private element: ElementRef, private renderer: Renderer2) {
        // e.nativeElement.style.fontSize = '22px'
        renderer.setStyle(element.nativeElement, 'font-size', '22px')
    }
    // To Listen to Events that are triggered by client
    @HostListener('mouseenter') foo() { this.element.nativeElement.style.color = 'red'; this.myBG = 'yellow' }
    @HostListener('mouseleave') bar() { this.element.nativeElement.style.color = 'black'; this.myBG = 'white' }

    // Bind a property (style.backgroundColor) on the host element 
    // TO a property in the directive class 
    @HostBinding('style.backgroundColor') myBG;

    // Set a property in the class from outside
    @HostBinding('style.box-shadow') myShadow;
    @Input('shadow') defaultShadow = '1px 1px 5px grey'
    
    ngOnInit() { // reached after all bound properties are initilized
        this.myShadow = this.defaultShadow;
    }

}