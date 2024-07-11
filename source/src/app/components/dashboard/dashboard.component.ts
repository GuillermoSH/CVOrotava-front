import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  burguerBtn: any;
  xmarkBtn: any;

  ngOnInit() {
    this.burguerBtn = document.getElementById("burguer-btn");
    this.burguerBtn.addEventListener("click", () => this.toggleSidebar());
    this.xmarkBtn = document.getElementById("xmark-btn");
    this.xmarkBtn.addEventListener("click", () => this.toggleSidebar());
    Array.from(document.getElementsByClassName("option")).forEach((option)=> {
      option.addEventListener("click", () => {
        if(document.getElementById("sidebar-container")?.classList.contains("active")) {
          this.toggleSidebar()
        }
      });
    })
  }

  toggleSidebar() {
    let sidebar = document.getElementById("sidebar-container");

    setTimeout(() => {
      this.xmarkBtn.classList.toggle("hiddenplus");
      this.burguerBtn.classList.toggle("hiddenplus");
    }, 150);
    sidebar?.classList.toggle("active");
    sidebar?.children[0].classList.toggle("active");
  }
}
