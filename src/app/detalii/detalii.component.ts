import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Apartament } from "app/models/apartament";

@Component({
  selector: 'app-detalii',
  templateUrl: './detalii.component.html',
  styleUrls: ['./detalii.component.css']
})
export class DetaliiComponent implements OnInit {
  butonDezactivat: boolean = false;
  apartament: Object;
  editApartament: Object;

  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = + params["id"];
    });
    let apartamente = [Apartament];
    apartamente = JSON.parse(localStorage.getItem("listaApartamente"));
    this.apartament = apartamente[this.id];

  }

  edit() {
    this.editApartament = this.apartament;
    this.butonDezactivat = true;
  }

  onApartamentEditat(value: boolean) {
    this.editApartament = null;
    this.butonDezactivat = false;
  }

}
