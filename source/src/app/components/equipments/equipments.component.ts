import { Component } from '@angular/core';
import { Equipment } from 'src/app/models/equipement.model';
import { EquipmentService } from 'src/app/services/equipment.service';
import { PlayersService } from 'src/app/services/players.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss'],
})
export class EquipmentsComponent {
  equipments: Equipment[] = [];
  newEquipment: Equipment = new Equipment();
  updatedEquipment: Equipment = new Equipment();
  equipmentDetails: Equipment = new Equipment();
  loaderErrorMsg: string = '';
  equipment_types: string[] = [];
  equipment_uses: string[] = [];
  equipment_sizes: string[] = [];

  constructor(
    private equipmentService: EquipmentService,
    private playerService: PlayersService
  ) {}

  ngOnInit() {
    this.reloadEquipmentsData();

    this.equipment_sizes = [
      '10 años',
      '12 años',
      '14 años',
      '16 años',
      'XS',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
      'XXXL',
    ];

    this.equipment_types = [
      'Camiseta',
      'Chaqueta',
      'Pantalón chandal',
      'Pantalón corto',
      'Malla', 
    ];

    this.equipment_uses = [
      'Competición',
      'Entrenamiento',
      'Calentamiento',
    ];
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

  toggleSaveModal() {
    document.getElementById('new-equipment-modal')?.classList.toggle('hidden');
  }

  saveNewEquipment() {
    let btnSave = document.getElementById('btn-save-equipment');
    let btnCancel = document.getElementById('btn-cancel-save-equipment');
    btnSave?.classList.toggle('pointer-events-none');
    this.transformDisableHideBtns(btnSave, btnCancel, null, 'bg-green-600');

    this.equipmentService.saveEquipment(this.newEquipment).subscribe({
      next: () => {
        Swal.fire({
          title: `¡Nueva equipación añadida!`,
          toast: true,
          position: 'top-end',
          width: 'max-content',
          icon: 'success',
          confirmButtonColor: '#34285a',
          showConfirmButton: false,
          timer: 2000,
        });

        this.toggleSaveModal();

        this.transformDisableHideBtns(btnSave, btnCancel, null, 'bg-green-600');
        btnSave?.classList.toggle('pointer-events-none');

        this.newEquipment = new Equipment();
        this.reloadEquipmentsData();
      },
      error: () => {
        Swal.fire({
          title: 'Error al guardar',
          icon: 'error',
          text: 'Se ha producido un error al guardar los cambios. Revise que la información introducida es correcta',
          showConfirmButton: true,
          confirmButtonColor: '#34285a',
          allowOutsideClick: false,
          color: '#34285a',
          iconColor: '#dc2626',
        });
      },
    });
  }

  searchEquipments() {
    let searchInput = <HTMLInputElement>document.getElementById('search-input');
    let aux = searchInput.value;

    if (aux.length < 1) {
      aux = 'empty';
    }

    this.equipmentService
      .searchBy(aux)
      .subscribe((equipments: Equipment[]) => {
        if (equipments.length != 0) {
          this.equipments = equipments;
        } else {
          Swal.fire({
            title: 'No se han encontrado resultados',
            icon: 'error',
            toast: true,
            position: 'top-end',
            width: 'max-content',
            background: '#dc2626',
            timerProgressBar: true,
            color: 'white',
            iconColor: 'white',
            timer: 1500,
            showConfirmButton: false,
          });
        }
      });
  }

  resetSearch() {
    let searchInput = <HTMLInputElement>document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = '';
    }
    this.reloadEquipmentsData();
  }

  deleteAll() {}

  private reloadEquipmentsData() {
    let wrapper = document.getElementById('equipment-wrapper');
    let spinner = document.getElementById('equipment-spinner');
    let notLoadedWrapper = document.getElementsByTagName('app-not-loaded')[0];
    this.equipmentService.getEquipments().subscribe({
      next: (equipments: Equipment[]) => {
        if (equipments.length < 1) {
          this.loaderErrorMsg =
            'Parece que no existen pagos aún. ¡Es hora de formalizar un par de ellos!';
          wrapper?.classList.add('hidden');
          notLoadedWrapper?.classList.remove('hidden');
          spinner?.classList.add('hidden');
          document.getElementById('btn-reload')?.classList.add('hidden');
          document
            .getElementById('btn-show_equipment_modal')
            ?.classList.remove('hidden');
        } else {
          this.equipments = equipments;
          spinner?.classList.add('hidden');
          wrapper?.classList.remove('hidden');
          notLoadedWrapper?.classList.add('hidden');
        }
      },
      error: () => {
        this.loaderErrorMsg =
          'Parece que no se han podido cargar los datos, recarga la página y si no se soluciona contacte con un técnico.';
        wrapper?.classList.add('hidden');
        notLoadedWrapper?.classList.remove('hidden');
        spinner?.classList.add('hidden');
        document.getElementById('btn-reload')?.classList.remove('hidden');
        document
          .getElementById('btn-show_equipment_modal')
          ?.classList.add('hidden');
      },
    });
  }
}
