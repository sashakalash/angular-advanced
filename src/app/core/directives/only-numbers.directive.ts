import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor() { }

  @HostListener('keydown', ['$event'])
  validate(event: KeyboardEvent) {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  }

}
