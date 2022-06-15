import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: "app-full-screen",
  templateUrl: "./full-screen.component.html",
  styleUrls: ["./full-screen.component.css"],
})
export class FullScreenComponent implements AfterViewInit {
  @ViewChild("map") divMap!: ElementRef<HTMLElement>;
  constructor() {}

  ngAfterViewInit(): void {
    new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-80.69854166126545, -0.980997733892689],
      zoom: 18,
    });
  }
}
