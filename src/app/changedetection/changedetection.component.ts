import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changedetection',
  templateUrl: './changedetection.component.html',
  styleUrls: ['./changedetection.component.css'],
  
})
export class ChangedetectionComponent implements OnInit {
  myObject = {
    name: "Nageshwar Sharma",
    email: "nagesh@test.com"
  }
  constructor(private _cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  changeName(){
    this.myObject.name = "Ram Kalp Sharma"
  }

}
