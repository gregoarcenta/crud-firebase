import { Component } from "@angular/core";

interface propiedad {
  title: string;
  description: string;
  lngLat: [number, number];
}

@Component({
  selector: "app-propiedades",
  templateUrl: "./propiedades.component.html",
  styleUrls: ["./propiedades.component.css"],
})
export class PropiedadesComponent {
  propiedades: propiedad[] = [
    {
      title: "Casa residencial, Canadá",
      description: "Bella propiedad en katana, Canadá",
      lngLat: [-75.92722289474008, 45.280015511264466],
    },
    {
      title: "Casa de playa, México",
      description: "Hermosa casa de playa en Acapulco, México",
      lngLat: [-99.91287720907991, 16.828940930185748],
    },
  ];

  constructor() {}
}
