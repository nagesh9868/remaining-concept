import { Component, OnInit } from '@angular/core';
import { DependenciyInjectionComponent } from '../dependenciy-injection/dependenciy-injection.component';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
  providers: [DependenciyInjectionComponent]
})
export class DirectivesComponent implements OnInit {

  constructor(private love:DependenciyInjectionComponent) { }

  ngOnInit(): void {
    this.love.dependency()
  }

}
