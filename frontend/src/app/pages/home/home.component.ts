import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  hire() {}

  earnMoney() {}

  closePopup() {
    const popup = <HTMLElement>document.getElementById('overlay');
    if (popup != null) {
      popup.style.visibility = 'hidden';
      popup.style.opacity = '0%';
      popup.style.zIndex = '-1';
    }
  }
}
