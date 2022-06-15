import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import * as mapboxgl from "mapbox-gl";

interface Marker {
  color: string;
  marker: mapboxgl.Marker;
}

@Component({
  selector: "app-marcadores",
  templateUrl: "./marcadores.component.html",
  styleUrls: ["./marcadores.component.css"],
})
export class MarcadoresComponent implements AfterViewInit {
  @ViewChild("map") divMap!: ElementRef<HTMLElement>;
  map!: mapboxgl.Map;
  zoomLevel: number = 15;
  lngLat: [number, number] = [-80.69854166126545, -0.980997733892689];

  markers: Marker[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: this.lngLat,
      zoom: this.zoomLevel,
    });

    this.readLocalStorage();
    // const markerHtml = document.createElement("div");
    // markerHtml.innerHTML = "Hola mundo";
    // new mapboxgl.Marker({ element: markerHtml })
    //   .setLngLat(this.lngLat)
    //   .addTo(this.map);
  }
  addMarker() {
    const color = "#xxxxxx".replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const newMarker = new mapboxgl.Marker({ draggable: true, color })
      .setLngLat(this.lngLat)
      .addTo(this.map);

    newMarker.on("dragend", (ev) => {
      this.saveLocalStorage();
    });

    this.markers.push({ marker: newMarker, color });
    this.saveLocalStorage();
  }

  toMarker(marker: mapboxgl.Marker) {
    this.map.flyTo({
      center: marker.getLngLat(),
    });
  }

  saveLocalStorage() {
    const newMarkerArr: any[] = [];
    this.markers.forEach((marker) => {
      const color = marker.color;
      const { lng, lat } = marker.marker.getLngLat();
      newMarkerArr.push({
        color,
        center: [lng, lat],
      });
    });
    localStorage.setItem("markers", JSON.stringify(newMarkerArr));
  }

  readLocalStorage() {
    const markers = localStorage.getItem("markers");
    if (!markers) return;

    const markersArr: any[] = JSON.parse(markers);
    markersArr.forEach((m) => {
      const newMarker = new mapboxgl.Marker({ draggable: true, color: m.color })
        .setLngLat(m.center)
        .addTo(this.map);

      this.markers.push({ marker: newMarker, color: m.color });
      this.saveLocalStorage();

      newMarker.on("dragend", (ev) => {
        this.saveLocalStorage();
      });
    });
  }

  deleteMarker(i: number) {
    this.markers[i].marker.remove();
    this.markers.splice(i, 1);
    this.saveLocalStorage();
  }
}
