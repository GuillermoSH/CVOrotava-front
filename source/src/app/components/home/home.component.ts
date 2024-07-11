import { Component } from '@angular/core';
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

  constructor(private playersService: PlayersService) {}

  ngOnInit() {
    this.playersService.getTotalNumPlayers().subscribe((total: string[]) => {
      this.totalNumPlayers.TFem = total[0];
      this.totalNumPlayers.TMas = total[1];
      document.getElementById("players-count-squeleton")?.classList.toggle("hidden");
      document.getElementById("players-count")?.classList.toggle("hidden");
    });
  }
}
