import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { INPUT_TYPES } from './core/models/input-types.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-advanced';
  numberOfFields: number = 3;
  typesList: string[] = [
    INPUT_TYPES.NUMBER,
    INPUT_TYPES.EMAIL,
    INPUT_TYPES.NUMBER,
  ];
}
