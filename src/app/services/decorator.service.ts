import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecoratorService {

  constructor() { }

  info:string = "I am Decorator Service"
}
