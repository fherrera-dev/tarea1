import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrar=true;

  contactos:any={
    mensaje:"",
    autor:""
  };

  vehiculos = [
    {
      "img":"../../../assets/toyota.png",
      "marca":"Toyota",
      "modelo":"Hilux",
      "anio":2020,
      "precio":"$37,000"
    },
    {
      "img":"../../../assets/nissan-ft.jpg",
      "marca":"Nissan",
      "modelo":"Frontier",
      "anio":2021,
      "precio":"$27,000"
    },
    {
      "img":"../../../assets/ram.jpg",
      "marca":"Dodge",
      "modelo":"RAM",
      "anio":2022,
      "precio":"$57,000"
    },
    {
      "img":"../../../assets/l200.png",
      "marca":"Mitsubishi",
      "modelo":"L200",
      "anio":2022,
      "precio":"$47,000"
    },
    {
      "img":"../../../assets/chevrolet.png",
      "marca":"Chevrolet",
      "modelo":"Silverado ",
      "anio":2022,
      "precio":"$55,000"
    }
];

}

  