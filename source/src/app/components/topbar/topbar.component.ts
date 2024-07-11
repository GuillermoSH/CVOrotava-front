import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  dropdown: any;
  profileIcon: any;

  constructor(private router: Router) {}
  
  ngOnInit() {
    this.dropdown = document.getElementById("profile-dropdown");
    this.profileIcon = document.getElementById("profile-icon");
  }

  toggleDropdown() {
    this.dropdown.classList.toggle("opacity-0");
    this.dropdown.classList.toggle("hidden");
    this.profileIcon.children[1].classList.toggle("rotate-180")
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
