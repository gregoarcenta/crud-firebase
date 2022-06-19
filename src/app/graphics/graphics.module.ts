import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GraphicsRoutingModule } from "./graphics-routing.module";
import { DonaComponent } from "./pages/dona/dona.component";
import { LayoutComponent } from "./pages/layout/layout.component";
import { MenuComponent } from "./components/menu/menu.component";
import { NgChartsModule } from "ng2-charts";
import { BarrasComponent } from "./pages/barras/barras.component";
import { DonaHttpComponent } from "./pages/dona-http/dona-http.component";
import { GraficaBarraComponent } from "./components/grafica-barra/grafica-barra.component";
import { BarrasDoblesComponent } from "./pages/barras-dobles/barras-dobles.component";

@NgModule({
  declarations: [
    DonaComponent,
    LayoutComponent,
    MenuComponent,
    BarrasComponent,
    DonaHttpComponent,
    GraficaBarraComponent,
    BarrasDoblesComponent,
  ],
  imports: [CommonModule, GraphicsRoutingModule, NgChartsModule],
})
export class GraphicsModule {}
