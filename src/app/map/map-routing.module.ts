import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutMapComponent } from "./components/layout-map/layout-map.component";
import { FullScreenComponent } from "./pages/full-screen/full-screen.component";
import { MarcadoresComponent } from "./pages/marcadores/marcadores.component";
import { PropiedadesComponent } from "./pages/propiedades/propiedades.component";
import { ZoomRangeComponent } from "./pages/zoom-range/zoom-range.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutMapComponent,
    children: [
      { path: "fullscreen", component: FullScreenComponent },
      { path: "zoom-range", component: ZoomRangeComponent },
      { path: "marcadores", component: MarcadoresComponent },
      { path: "propiedades", component: PropiedadesComponent },
      { path: "**", redirectTo: "fullscreen" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRoutingModule {}
