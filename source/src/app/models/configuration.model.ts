export class Configuration {
    id: string;
    notification_emails: string;
    benjamin_year: string;
    alevin_year: string;
    infantil_year: string;
    cadete_year: string;
    juvenil_year: string;
    junior_year: string;
    mod_date: string;

    constructor(id: string = "", notificationEmails: string = "", benjamin_year: string = "", alevin_year: string = "", infantil_year: string = "", cadete_year: string = "", juvenil_year: string = "", junior_year: string = "", mod_date: string = "") {
        this.id = id;
        this.notification_emails = notificationEmails;
        this.benjamin_year = benjamin_year;
        this.alevin_year = alevin_year;
        this.infantil_year = infantil_year;
        this.cadete_year = cadete_year;
        this.juvenil_year = juvenil_year;
        this.junior_year = junior_year;
        this.mod_date = mod_date;
    }
}
