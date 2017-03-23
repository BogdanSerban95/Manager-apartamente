import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Apartament } from "app/models/apartament";

@Component({
  selector: 'app-adaugare-apartament',
  templateUrl: './adaugare-apartament.component.html',
  styleUrls: ['./adaugare-apartament.component.css']
})
export class AdaugareApartamentComponent implements OnInit {
  editMode: boolean = false;
  apartament: Apartament = new Apartament();
  apartamente: Apartament[];
  pretInvalid: boolean;
  suprafataInvalida: boolean;
  titlu: String;
  textButon: String;

  constructor() {
  }

  ngOnInit() {
    if (this.apartamentEdit == null) {
      this.titlu = "Adauga Apartament";
      this.textButon = "Adauga";

    } else {
      this.titlu = "Editeaza Apartament";
      this.textButon = "Salveaza";
      this.editMode = true;
      this.apartament = this.apartamentEdit;
    }
  }

  @Input() apartamentEdit: Apartament;
  @Input() id: number;
  @Output() onApartamentAdded = new EventEmitter<Apartament>();
  @Output() onApartamentEditat = new EventEmitter<boolean>();

  addApartament(apartament: Apartament) {
    this.pretInvalid = false;
    this.suprafataInvalida = false;
    if (!Number(apartament.pret)) {
      this.pretInvalid = true;
      return;
    }
    if (Number(apartament.pret) < 0) {
      this.pretInvalid = true;
      return;
    }
    if (!Number(apartament.suprafata)) {
      this.suprafataInvalida = true;
      return;
    }
    if (Number(apartament.suprafata <= 0)) {
      this.suprafataInvalida = true;
      return;
    }

    if (!this.editMode) {
      this.onApartamentAdded.emit(apartament);
      this.apartament = new Apartament();
    } else {
      let apartamente = (JSON.parse(localStorage.getItem("listaApartamente")));
      apartamente[this.id] = apartament;
      localStorage.setItem("listaApartamente", JSON.stringify(apartamente));
      this.onApartamentEditat.emit(true);
    }
  }

  valideaza(invalid: boolean) {
    if (invalid) {
      return "red";
    } else {
      return "";
    }
  }

}
