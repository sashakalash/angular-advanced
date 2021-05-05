import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { BehaviorSubject, EMPTY, fromEvent, iif, merge, Observable, Subject, timer } from 'rxjs';
import { debounceTime, map, takeUntil, tap, switchMap, takeWhile, switchMapTo, buffer, bufferCount } from 'rxjs/operators';
import { CoordSendingService } from 'src/app/core/services/coord-sending.service';

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.css']
})
export class RxjsTestComponent implements OnInit, OnDestroy {

  private destroyed$ = new Subject();
  private pauser$ = new BehaviorSubject(false);
  private mousemoveStream$: Observable<string>;
  private mouseclickStream$: Observable<string>;
  public timer$: Observable<number>;

  isStarted$: Observable<boolean> = this.pauser$.asObservable();

  private bufferCount: number = 10;

  constructor(private coordSendingService: CoordSendingService) {

  }

  private subscribeToEvents(): void {
    this.mousemoveStream$ = fromEvent<MouseEvent>(document, 'mousemove').pipe(
      takeUntil(this.destroyed$),
      debounceTime(100),
      map((e: MouseEvent) => `move: { x: ${e.clientX}, y: ${e.clientY} }`)
    );

    this.mouseclickStream$ = fromEvent<MouseEvent>(document, 'click').pipe(
      takeUntil(this.destroyed$),
      debounceTime(100),
      map((e: MouseEvent) => `click: { x: ${e.clientX}, y: ${e.clientY} }`)
    );

    const documentEventStreams$: Observable<string> = merge(this.mousemoveStream$, this.mouseclickStream$);

    this.pauser$.pipe(
      takeUntil(this.destroyed$),
      switchMap(isStarted => iif(() => isStarted, documentEventStreams$, EMPTY)),
      bufferCount(this.bufferCount),
    ).subscribe(res => this.coordSendingService.pushData(String(res)));

    this.timer$ = this.pauser$.pipe(
      takeUntil(this.destroyed$),
      switchMap(isStarted => iif(() => isStarted, timer(1, 1000), EMPTY))
    );
  }

  ngOnInit() {
    this.subscribeToEvents();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  switchRecord(e: MatSlideToggleChange) {
    this.pauser$.next(e.checked);
  }
}
