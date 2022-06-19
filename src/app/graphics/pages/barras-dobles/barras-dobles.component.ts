import { Component, OnInit } from "@angular/core";
import { ChartData, ChartType } from "chart.js";

@Component({
  selector: "app-barras-dobles",
  templateUrl: "./barras-dobles.component.html",
  styleUrls: ["./barras-dobles.component.css"],
})
export class BarrasDoblesComponent implements OnInit {
  proveedoresLabels: string[] = ["2021", "2022", "2023", "2024", "2025"];

  proveedoresData: ChartData<"bar"> = {
    labels: this.proveedoresLabels,
    datasets: [
      { data: [100, 200, 300, 400, 500], label: "Vendedor A" },
      { data: [50, 250, 30, 450, 200], label: "Vendedor B" },
    ],
  };

  productoData: ChartData<"bar"> = {
    labels: this.proveedoresLabels,
    datasets: [
      {
        data: [200, 300, 400, 300, 100],
        label: "Carros",
        backgroundColor: "blue",
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
