import { NgModule } from "@angular/core";
import { BootstrapIconsModule } from "ng-bootstrap-icons";
import {
  EyeFill,
  PenFill,
  Trash2Fill,
  ArrowLeft,
} from "ng-bootstrap-icons/icons";
import { TooltipModule } from "ng2-tooltip-directive";

const icons = {
  EyeFill,
  PenFill,
  Trash2Fill,
  ArrowLeft,
};

@NgModule({
  declarations: [],
  imports: [BootstrapIconsModule.pick(icons)],
  exports: [BootstrapIconsModule],
})
export class IconsModule {}
