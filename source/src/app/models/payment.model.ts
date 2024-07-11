import { Player } from "./player.model";

export class Payment {
    id: string;
	quantity: string;
	month: number;
	year: string;
	concept: string;
	players: Player[];

	constructor(id: string = "", quantity: string = "", month: number = 0, year: string = "", concept: string = "", players: Player[] = []) {
		this.id = id;
		this.quantity = quantity;
		this.month = month;
		this.year = year;
		this.concept = concept;
		this.players = players;
	}
}