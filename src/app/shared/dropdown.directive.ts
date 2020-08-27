import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class dropdownDirective{
    //  !--- Method 1 using hover ---!
    constructor(private elRef: ElementRef,private renderer: Renderer2){}
    // ngOnInit(){}
    
    // @HostListener('mouseenter') mouseenter(eventData: Event){
    //     // let node = this.renderer.parentNode
    //     // console.log(node)
    //     this.renderer.addClass(this.elRef.nativeElement,'open');
    //     console.log(this.elRef.nativeElement)
    // }
    // @HostListener('mouseleave') mouseleave(eventData: Event){
    //     this.renderer.removeClass(this.elRef.nativeElement,'open');
    // }
    
    // !--- Method 2 using click ---!
    // @HostBinding('class.open') isOpen = false;
    // @HostListener('click') toggleOpen(){
        // this.isOpen = !this.isOpen
    // }

    //  !--- Method 3 using click but ensuring that clicking anywhere closes the dropdown ---!
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
        // console.log('event.target',event.target)
      }
}