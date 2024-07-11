export class Player {
    id: string;
	dni: string;
	name: string;
	surname1: string;
	surname2: string;
	telephone: string;
	email: string;
	address: string;
	birthday: string;
	category: string;

	constructor(id: string = "", dni: string = "", name: string = "", surname1: string = "", surname2: string = "", telephone: string = "", email: string = "", address: string = "", birthday: string = "", category: string = "") {
		this.id = id;
		this.dni = dni;
		this.name = name;
		this.surname1 = surname1;
		this.surname2 = surname2;
		this.telephone = telephone;
		this.email = email;
		this.address = address;
		this.birthday = birthday;
		this.category = category;
	}
}