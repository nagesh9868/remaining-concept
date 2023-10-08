import { Component, OnInit } from '@angular/core';
import { TopMidBottomService } from '../services/top-mid-bottom.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  array = this.service.array
  constructor(private service:TopMidBottomService) { }

  ngOnInit(): void {
  }

}
