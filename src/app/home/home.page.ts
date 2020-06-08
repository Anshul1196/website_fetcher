import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nameofurl:string;
  public url:string;
  constructor(private router: Router) {}

  uploadURL(){
    this.url=this.nameofurl;
    localStorage.setItem('url', this.url);
    this.router.navigateByUrl('/result');
  }
}
