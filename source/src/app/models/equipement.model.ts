import { Player } from "./player.model";

export class Equipment {
    id: string;
	size: string;
	type: string;
	color: string;
	use: string;
	players: Player[];

	constructor(id: string = "", size: string = "", type: string = "", color: string = "", use: string = "", players: Player[] = []) {
		this.id = id;
		this.size = size;
		this.type = type;
		this.color = color;
		this.use = use;
		this.players = players;
	}
}
