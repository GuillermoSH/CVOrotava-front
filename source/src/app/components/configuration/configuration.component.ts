import { Component } from '@angular/core';
import { Configuration } from 'src/app/models/configuration.model';
import { ConfigurationService } from 'src/app/services/configuration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent {
  configuration: Configuration = new Configuration();
  newConfiguration: Configuration = new Configuration();
  cathegoryYears: any;

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.reloadConfigurationData();
  }

  private reloadConfigurationData() {
    this.configurationService.getConfiguration().subscribe((configurations: Configuration[]) => {
      this.configuration = configurations[0]
      this.cathegoryYears = [
        {
          "cathegory": "Benjamín",
          "year": this.configuration.benjamin_year
        },
        {
          "cathegory": "Alevín",
          "year": this.configuration.alevin_year
        },
        {
          "cathegory": "Infantil",
          "year": this.configuration.infantil_year
        },
        {
          "cathegory": "Cadete",
          "year": this.configuration.cadete_year
        },
        {
          "cathegory": "Juvenil",
          "year": this.configuration.juvenil_year
        },
        {
          "cathegory": "Junior",
          "year": this.configuration.junior_year
        },
      ]
    })
  }

  transformDisableHideBtns(
    transformBtn: any,
    hideBtn: any,
    disabledBtn: any = null,
    transformBtnColor: string
  ) {
    transformBtn?.classList.toggle('pointer-events-none');
    transformBtn?.children[0].classList.toggle('hiddenplus');
    transformBtn?.children[1].classList.toggle('hiddenplus');
    transformBtn?.children[2].classList.toggle('hiddenplus');
    transformBtn?.children[3].classList.toggle('hiddenplus');
    transformBtn?.classList.toggle(transformBtnColor);
    hideBtn?.classList.toggle('hidden');
    if (disabledBtn != null) {
      disabledBtn?.classList.toggle('disabled');
    }
  }

  getConfigDate() {
    let modDate = this.configuration.mod_date;
    if (Number(modDate.split("-")[1]) >= 9) {
      return modDate.split("-")[2] + "/" + (Number(modDate.split("-")[2]) + 1)
    } else {
      return (Number(modDate.split("-")[2]) - 1) + "/" + modDate.split("-")[2];
    }
  }

  getCathegoryYears(initYear: string) {
    return initYear + " - " + (Number(initYear) - 1);
  }

  toggleUpdateCathegoryYearsModal() {
    document.getElementById("cathegory-years-modal")?.classList.toggle("hidden");
  }

  toggleUpdateNotificationEmailsModal() {
    document.getElementById("notification-emails-modal")?.classList.toggle("hidden");
  }

  saveCathegoryYearChanges() {
    let saveBtn = document.getElementById("cathegory-years-save-btn");
    let closeBtn = document.getElementById("close-cathegory-years-btn");
    this.transformDisableHideBtns(saveBtn, closeBtn, null, "bg-blue-700");
    this.configurationService.saveConfiguration(this.configuration).subscribe({
      next: () => {
        this.reloadConfigurationData();
        this.transformDisableHideBtns(saveBtn, closeBtn, null, "bg-blue-700");
        this.toggleUpdateCathegoryYearsModal();
        Swal.fire({
          icon: "success",
          title: "¡Cambios guardados!",
          toast: true,
          timerProgressBar: true,
          timer: 1500,
          showConfirmButton: false,
          position: "top-end"
        })
      },
      error: () => {
        Swal.fire("Error al guardar", "Parece que ha habido un error al guardar los años en la base de datos... Consulte a su técnico más cercano si el problema persiste", "error");
        this.transformDisableHideBtns(saveBtn, closeBtn, null, "bg-blue-700");
      }
    })
  }

  saveNotificationEmailsChanges() {
    let saveBtn = document.getElementById("notification-emails-save-btn");
    let closeBtn = document.getElementById("close-notification-emails-btn");
    this.transformDisableHideBtns(saveBtn, closeBtn, null, "bg-orange-700");
    this.configurationService.saveConfiguration(this.configuration).subscribe({
      next: () => {
        this.reloadConfigurationData();
        this.transformDisableHideBtns(saveBtn, closeBtn, null, "bg-orange-700");
        this.toggleUpdateCathegoryYearsModal();
        Swal.fire({
          icon: "success",
          title: "¡Cambios guardados!",
          toast: true,
          timerProgressBar: true,
          timer: 1500,
          showConfirmButton: false,
          position: "top-end"
        })
      },
      error: () => {
        Swal.fire("Error al guardar", "Parece que ha habido un error al guardar los emails en la base de datos... Consulte a su técnico más cercano si el problema persiste", "error");
        this.transformDisableHideBtns(saveBtn, closeBtn, null, "bg-orange-700");
      }
    })
  }
}
