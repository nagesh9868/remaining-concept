import { Component, OnInit } from '@angular/core';
import { TopMidBottomService } from '../services/top-mid-bottom.service';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {
  array = this.service.array
  constructor(private service:TopMidBottomService) { }

  ngOnInit(): void {
  }

}
