import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  options: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.options = document.getElementsByClassName("option");

    this.router.events.subscribe(() => {
      this.setActiveItem();
    });
  }

  setActiveItem() {
    for (let option of this.options) {
      option.classList.remove("active");

      if(window.location.pathname.split("/")[2] == option.id){
        option.classList.add("active");
      } else if (window.location.pathname.replace("/", "") == "dashboard") {
        this.options[0].classList.add("active");
      }
    }
  }
}
