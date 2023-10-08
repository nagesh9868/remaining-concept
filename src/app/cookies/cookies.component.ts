import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {
  cookiesStored:any
  constructor(private cookie:CookieService) { }

  ngOnInit(): void {
  }

  setCookies(){
    this.cookie.set('GlobalUser', 'Global User')
  }

  getCookies(){
    this.cookiesStored = this.cookie.get('GlobalUser  ')
    console.log(this.cookie.get('GlobalUser'));
    
  }

  delCookies(){
    this.cookie.delete('GlobalUser')
  }
  delAllCookies(){
    this.cookie.deleteAll()
  }

}
