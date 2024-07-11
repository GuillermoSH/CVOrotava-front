import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/models/payment.model';
import { Player } from 'src/app/models/player.model';
import { PaymentService } from 'src/app/services/payment.service';
import { PlayersService } from 'src/app/services/players.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payments-details',
  templateUrl: './payments-details.component.html',
  styleUrls: ['./payments-details.component.scss']
})
export class PaymentsDetailsComponent {
  payment = new Payment();
  players: Player[] = [];
  payers: Player[] = [];
  notPayers: Player[] = [];
  months: string[] = [];
  searchedPayerPlayer: any = {
    name: "",
  };
  searchedNotPayerPlayer: any = {
    name: "",
  };

  constructor(private paymentService: PaymentService, private playerService: PlayersService, private router: Router) {}

  ngOnInit() {
    this.playerService.getPlayers().subscribe((players: Player[]) => {
      this.players = players;
      this.reloadData();
    });
    

    this.months = [
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

  private reloadData() {
    let wrapper = document.getElementById('payment-details');
    let spinner = document.getElementById('payment-details-spinner');

    this.paymentService.getPaymentById(this.router.url.split("/")[3]).subscribe({
      next: (payment: Payment) => {
        this.payment = payment;
        this.payers = this.payment.players;
        this.notPayers = this.getNotPaidList(payment.players);
        spinner?.classList.add('hidden');
        wrapper?.classList.remove('hidden');
      },
      error: () => {
        wrapper?.classList.add('hidden');
        spinner?.classList.add('hidden');
      },
    });
  }

  toggleUpdateModal() {
    document.getElementById('update-payment-modal')?.classList.toggle('hidden');
  }

  updatePayment() {
    let btnUpdate = document.getElementById('btn-update-payment');
    let btnCancel = document.getElementById('btn-cancel-update-payment');

    btnUpdate?.classList.toggle('pointer-events-none');
    this.transformDisableHideBtns(btnUpdate, btnCancel, null, 'bg-green-600');

    this.paymentService.updatePayment(this.payment).subscribe({
      next: () => {
        Swal.fire({
          title: `¡Los datos han sido actualizados!`,
          toast: true,
          position: 'top-end',
          width: 'max-content',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        });

        this.transformDisableHideBtns(
          btnUpdate,
          btnCancel,
          null,
          'bg-green-600'
        );

        btnUpdate?.classList.toggle('pointer-events-none');

        this.toggleUpdateModal();
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

  deletePayment() {
    let btnEdit = document.getElementById('btn-edit-payment');
    let btnCancel = document.getElementById('btn-cancel-update-payment');
    let btnDelete = document.getElementById('btn-delete-payment');
    let btnBack = document.getElementById('btn-details-back');

    btnDelete?.classList.toggle('pointer-events-none');
    btnBack?.classList.toggle('disabled');
    this.transformDisableHideBtns(btnDelete, btnCancel, btnEdit, 'bg-red-700');

    this.paymentService.deletePayment(this.payment.id).subscribe({
      next: () => {
        Swal.fire({
          title: `¡Se eliminó el pago!`,
          toast: true,
          position: 'top-end',
          width: 'max-content',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        });

        this.transformDisableHideBtns(
          btnDelete,
          btnCancel,
          btnEdit,
          'bg-red-700'
        );
        btnBack?.classList.toggle('disabled');
        btnDelete?.classList.toggle('pointer-events-none');

        this.payment = new Payment();

        this.router.navigate(['/dashboard/payments']);
      },
      error: () => {
        Swal.fire({
          title: 'Error al eliminar',
          icon: 'error',
          text: 'Se ha producido un error al eliminar el pago. Parece que el pago ya no existe, pruebe a recargar la página. Consulte con el desarrollador si el problema persiste.',
          showConfirmButton: true,
          confirmButtonColor: '#34285a',
          allowOutsideClick: false,
          color: '#34285a',
          iconColor: '#dc2626',
        });
      },
    });
  }

  deletePlayerFromPayment(playerToDelete: Player, eventClicked: any) {
    let fa_trash = eventClicked.parentElement.children[0];
    let fa_spinner = eventClicked.parentElement.children[1];

    eventClicked.parentElement.classList.toggle("pointer-events-none");
    fa_trash.classList.toggle("hiddenplus");
    fa_spinner.classList.toggle("hiddenplus");

    this.paymentService
      .deletePlayerFromPayment(playerToDelete.id, this.payment.id)
      .subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Jugador/a eliminado/a',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1500,
          });

          this.payment.players = this.payment.players.filter(
            (player) => player != playerToDelete
          );
          this.notPayers = this.getNotPaidList();
          eventClicked.parentElement.classList.toggle("pointer-events-none");
          fa_trash.classList.toggle("hiddenplus");
          fa_spinner.classList.toggle("hiddenplus");
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error al añadir el jugador',
          });
          eventClicked.parentElement.classList.toggle("pointer-events-none");
          fa_trash.classList.toggle("hiddenplus");
          fa_spinner.classList.toggle("hiddenplus");
        },
      });
  }

  addPlayerToPayment(playerToAdd: Player, eventClicked: any) {
    let fa_pencil = eventClicked.parentElement.children[0];
    let fa_spinner = eventClicked.parentElement.children[1];

    eventClicked.parentElement.classList.toggle("pointer-events-none");
    fa_pencil.classList.toggle("hiddenplus");
    fa_spinner.classList.toggle("hiddenplus");

    this.paymentService
      .addPlayerToPayment(playerToAdd, this.payment.id)
      .subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Jugador/a añadido/a',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1500,
          });

          this.payment.players.push(playerToAdd);
          this.notPayers = this.getNotPaidList();

          eventClicked.parentElement.classList.toggle("pointer-events-none");
          fa_pencil.classList.toggle("hiddenplus");
          fa_spinner.classList.toggle("hiddenplus");
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'No furulo',
          });

          eventClicked.parentElement.classList.toggle("pointer-events-none");
          fa_pencil.classList.toggle("hiddenplus");
          fa_spinner.classList.toggle("hiddenplus");
        },
      });
  }

  getNotPaidList(payersList: Player[] = this.payment.players): Player[] {
    let notPaidList: Player[] = [];

    notPaidList = this.players.filter(
      (player) =>
        !payersList.some(
          (excludePlayer) => excludePlayer.id === player.id
        )
    );

    return notPaidList;
  }

  private removeAccent(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  searchPayers() {
    this.payers = this.payment.players.filter((player) => this.removeAccent([player.name, player.surname1, player.surname2].join(" ").toLowerCase()).includes(this.searchedPayerPlayer.name.toLowerCase()));
  }

  searchNotPayers() {
    this.notPayers = this.getNotPaidList().filter((player) => this.removeAccent([player.name, player.surname1, player.surname2].join(" ").toLowerCase()).includes(this.searchedNotPayerPlayer.name.toLowerCase()));
  }
}
