import { ApplicationRef, Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-tickrunchange',
  templateUrl: './tickrunchange.component.html',
  styleUrls: ['./tickrunchange.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TickrunchangeComponent implements OnInit {
  currentTime:any
  text = "Nozones"
  constructor(private _appRef:ApplicationRef, 
    private _cdr:ChangeDetectorRef) {
    interval(1000).subscribe(()=>{
      this.currentTime = Date.now()
      _cdr.markForCheck()
    })
  }
  detach(){
    this._cdr.detach()
  }
  reattach(){
    this._cdr.reattach()
  }
  detectChanges(){
    this._cdr.detectChanges()
  }
    
    // interval(1000).subscribe(()=>{
      //   _appRef.tick()
      // })
  keypress(event:any){
    this.text = event.target.value 
  }
  ngOnInit(): void {
    
  }
  
}
