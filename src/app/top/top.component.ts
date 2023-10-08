import { Component, OnInit } from '@angular/core';
import { TopMidBottomService } from '../services/top-mid-bottom.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  array = this.service.array
  constructor(private service:TopMidBottomService) { }

  ngOnInit(): void {
    
  }

}
