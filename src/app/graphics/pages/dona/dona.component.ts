import { Component, OnInit } from "@angular/core";
import { ChartData, ChartType, Color } from "chart.js";

@Component({
  selector: "app-dona",
  templateUrl: "./dona.component.html",
  styleUrls: ["./dona.component.css"],
})
export class DonaComponent implements OnInit {
  doughnutChartType: ChartType = "doughnut";
  doughnutChartLabels: string[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail-Order Sales",
  ];

  doughnutChartData: ChartData<"doughnut"> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [350, 450, 100] }],
  };

  constructor() {}

  ngOnInit(): void {}
}
