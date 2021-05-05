import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { EmailInputComponent } from 'src/app/components/email-input/email-input.component';
import { OnlyNumbersInputComponent } from 'src/app/components/only-numbers-input/only-numbers-input.component';
import { INPUT_TYPES } from '../models/input-types.enum';

@Directive({
  selector: '[generateInputs]'
})
export class GenerateInputsDirective implements OnDestroy {
  componentRef!: ComponentRef<EmailInputComponent | OnlyNumbersInputComponent>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
  ) { }

  @Input('generateInputs') set quantityVal(quantity: number) {
    console.log(quantity, this.types)
    this.viewContainerRef.clear();
     for (let i = 0; i < quantity; i++) {
        this.types.forEach(type => this.generateComponent(type))
     }
  }

  @Input('generateInputsTypes') types: string[];

  private generateComponent(type: string) {
    let factory;
    switch (type) {
      case INPUT_TYPES.NUMBER:
        factory = this.resolver.resolveComponentFactory(EmailInputComponent);
        this.componentRef = this.viewContainerRef.createComponent(factory);
        break;
      case INPUT_TYPES.EMAIL:
        factory = this.resolver.resolveComponentFactory(OnlyNumbersInputComponent);
        this.componentRef = this.viewContainerRef.createComponent(factory);
        break;
      default:
        break;
    }
  }
  ngOnDestroy() {
    this.componentRef.destroy();
  }

}
