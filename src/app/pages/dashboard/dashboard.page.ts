import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

  setDashboardPage(event)
  {
    document.getElementsByName('module').forEach(el => {
      if(el.getAttribute('src') != event.detail.value)
      {
        el.setAttribute('hidden', 'true')
      }
      else
      {
        el.removeAttribute('hidden')
      }
    })
  }

  ngOnInit() {
  }

}
