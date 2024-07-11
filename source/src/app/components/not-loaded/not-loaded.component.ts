import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-not-loaded',
  templateUrl: './not-loaded.component.html',
  styleUrls: ['./not-loaded.component.scss']
})
export class NotLoadedComponent {
  @Input() loaderErrorMsg: string = "";

  showPlayerModal() {
    document.getElementById("new-player-modal")?.classList.toggle("hidden");
  }

  showPaymentModal() {
    document.getElementById("new-payment-modal")?.classList.toggle("hidden");
  }  
}
