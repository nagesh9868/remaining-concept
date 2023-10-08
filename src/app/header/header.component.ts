import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  color:number =0
  constructor(private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    interval(500).subscribe(()=>{
      let dateNow = Date.now()
      let dateNowStr = dateNow.toString()
      this.color = +(dateNowStr.slice(10))
      this._cdr.markForCheck()
      // console.log(this.color);      
    })
  }

  stopColorChange(){
    this._cdr.detach()
  }
  startColorChange(){
    this._cdr.reattach()
  }

 

}
