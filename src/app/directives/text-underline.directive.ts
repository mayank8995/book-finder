import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextUnderline]'
})
export class TextUnderlineDirective {

  constructor(private elemnentRef: ElementRef) {

   }

   @HostListener('mouseover',['$event'])
   onmouseover(){
     console.log("elemnentRef>>",this.elemnentRef);
     this.elemnentRef.nativeElement.style.textDecoration = 'underline';
   }

   @HostListener('mouseout',['$event'])
   onmouseout(){
     this.elemnentRef.nativeElement.style.textDecoration = 'none';
   }
}
