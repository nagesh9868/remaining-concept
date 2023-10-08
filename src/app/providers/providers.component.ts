import { Component, Inject, OnInit, inject,  } from '@angular/core';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})

export class ProvidersComponent implements OnInit {
  constructor(
    public _ps:ProviderService, //@Inject('provider') public config:any, 
    ) { }
  ngOnInit(): void {
    // console.log(this.config);
  }
  dec():void{
    this._ps.dec()
  }
  inc():void{
    this._ps.inc()
  }
  
}
