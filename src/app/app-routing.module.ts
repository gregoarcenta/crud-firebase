import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "posts",
    loadChildren: () => import("./post/post.module").then((m) => m.PostModule),
  },
  {
    path: "mapas",
    loadChildren: () => import("./map/map.module").then((m) => m.MapModule),
  },
  {
    path: "graficas",
    loadChildren: () =>
      import("./graphics/graphics.module").then((m) => m.GraphicsModule),
  },
  { path: "**", redirectTo: "posts" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
