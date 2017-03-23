import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Apartament } from '../models/apartament';
import { Router } from "@angular/router";

@Component({
  selector: 'app-apartamente',
  templateUrl: './apartamente.component.html',
  styleUrls: ['./apartamente.component.css']
})
export class ApartamenteComponent implements OnInit {
  apartamente: Apartament[] = [];
  editApartament: Apartament;

  constructor(private router: Router) { }

  ngOnInit() {
    this.apartamente = JSON.parse(localStorage.getItem("listaApartamente"));
    if (this.apartamente == null) {
      this.apartamente = [];
    }
  }
  ngOnDestroy() {
    localStorage.setItem("listaApartamente", JSON.stringify(this.apartamente));
  }

  onApartamentClick(index: Number) {
    this.router.navigate(["/detalii", index]);
  }

  onApartamentAdded(apartament: Apartament) {
    this.apartamente.push(apartament);
    localStorage.setItem("listaApartamente", JSON.stringify(this.apartamente));
  }
}
