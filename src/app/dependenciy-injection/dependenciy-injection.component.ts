import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependenciy-injection',
  templateUrl: './dependenciy-injection.component.html',
  styles: [],
  // providers: []
})

@Injectable()
export class DependenciyInjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dependency(){
    alert('The alert is coming from Dependency Injection')
  }

}
