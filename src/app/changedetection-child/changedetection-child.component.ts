import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-changedetection-child',
  templateUrl: './changedetection-child.component.html',
  styleUrls: ['./changedetection-child.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangedetectionChildComponent implements OnInit {
  @Input() something:any
  constructor() { }

  ngOnInit(): void {
  }

  changeEmail(){
    this.something.email = "ram@test.com"
  }
}
