import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmailValidate]'
})
export class EmailValidateDirective {
  emailRegExp = new RegExp(
    '^(([^«»‹›‘’\'♦№<>(){}\\[\\]\\\\.,;:%$!#=?\\s\\/\\|+*&\\^@"\u0080-\u2009\u2011-\u2211\u2213-\uFFFF`]+(\\.[^«»‹›‘’\'♦№<>()\\[\\]\\\\.,;:%$!#=\\s\\/\\|+*&\\^@"\u0080-\u2010\u2011-\u2211\u2213-\uFFFF`]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
  );

  constructor(private el: ElementRef) { }

  @HostListener('input')
  validate() {
    if (this.el.nativeElement.value && !this.emailRegExp.test(this.el.nativeElement.value)) {
      this.el.nativeElement.style.backgroundColor = 'orange';
    } else {
      this.el.nativeElement.style.backgroundColor = 'transparent';
    }
  }

}
