import { Component } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PaymentService } from 'src/app/services/payment.service';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  totalNumPlayers: any = {
    "TFem": 0,
    "TMas": 0,
  };
  defaulters: number = 0;
  private readonly months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];
  currentMonth: string = this.months[new Date().getMonth()];

  constructor(private readonly playersService: PlayersService, private readonly paymentService: PaymentService) {}

  ngOnInit() {
    this.playersService.getTotalNumPlayers().subscribe((total: string[]) => {
      this.totalNumPlayers.TFem = total[0];
      this.totalNumPlayers.TMas = total[1];
      document.getElementById("players-count-squeleton")?.classList.toggle("hidden");
      document.getElementById("players-count")?.classList.toggle("hidden");
    });

    let actualYear = new Date().getFullYear().toString();
    let actualMonth = (new Date().getMonth() + 1).toString();

    this.paymentService.getDefaultersByMonth(actualMonth, actualYear).subscribe((players: Player[]) => {
      this.defaulters = players.length;
      document.getElementById("defaulters-count-squeleton")?.classList.toggle("hidden");
      document.getElementById("defaulters-count")?.classList.toggle("hidden");
    })
  }
}
