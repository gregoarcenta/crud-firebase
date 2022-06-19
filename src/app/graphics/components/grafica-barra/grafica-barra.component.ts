import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ChartConfiguration, ChartData, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: "app-grafica-barra",
  templateUrl: "./grafica-barra.component.html",
  styleUrls: ["./grafica-barra.component.css"],
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartType: ChartType = "bar";

  public barChartOptions: ChartConfiguration["options"] = {
    responsive: true,
  };

  @Input() barChartData: ChartData<"bar"> = { labels: [], datasets: [] };

  constructor() {}

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = "line";
    }
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.chart?.update();
  }
}
