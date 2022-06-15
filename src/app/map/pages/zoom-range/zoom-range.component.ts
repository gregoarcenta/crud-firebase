import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: "app-zoom-range",
  templateUrl: "./zoom-range.component.html",
  styleUrls: ["./zoom-range.component.css"],
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  @ViewChild("map") divMap!: ElementRef<HTMLElement>;
  map!: mapboxgl.Map;
  zoomLevel: number = 15;
  lngLat: [number, number] = [-80.69854166126545, -0.980997733892689];

  constructor() {}

  ngOnDestroy(): void {
    this.map.off("zoom", () => {});
    this.map.off("zoomend", () => {});
    this.map.off("move", () => {});
  }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: this.lngLat,
      zoom: this.zoomLevel,
    });

    this.map.on("zoom", (ev) => {
      this.zoomLevel = ev.target.getZoom();
    });

    this.map.on("zoomend", (ev) => {
      if (ev.target.getZoom() > 18) {
        this.map.zoomTo(18);
      }
    });

    this.map.on("move", (ev) => {
      const { lng, lat } = ev.target.getCenter();
      this.lngLat = [lng, lat];
    });
  }

  zoomIn() {
    this.map.zoomIn();
  }

  zoomOut() {
    this.map.zoomOut();
  }

  zoomChange(value: string) {
    this.map.zoomTo(Number(value));
  }
}
