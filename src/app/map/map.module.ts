import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MapRoutingModule } from "./map-routing.module";
import { FullScreenComponent } from "./pages/full-screen/full-screen.component";
import { ZoomRangeComponent } from "./pages/zoom-range/zoom-range.component";
import { MarcadoresComponent } from "./pages/marcadores/marcadores.component";
import { PropiedadesComponent } from "./pages/propiedades/propiedades.component";
import { MenuMapComponent } from "./components/menu-map/menu-map.component";
import { LayoutMapComponent } from './components/layout-map/layout-map.component';

@NgModule({
  declarations: [
    FullScreenComponent,
    ZoomRangeComponent,
    MarcadoresComponent,
    PropiedadesComponent,
    MenuMapComponent,
    LayoutMapComponent,
  ],
  imports: [CommonModule, MapRoutingModule],
})
export class MapModule {}
