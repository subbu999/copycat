
import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'copycat';
  @HostListener('window:scroll', ['$event']) onScroll(e) {
    let el = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
      el.classList.add('changeNavBgc');
    }
    else {
      el.classList.remove('changeNavBgc');
    }
  }

  ngOnInit() {
    AOS.init();
  }
}
