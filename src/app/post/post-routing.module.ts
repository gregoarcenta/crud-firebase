import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarEditarComponent } from "./pages/agregar-editar/agregar-editar.component";
import { PostComponent } from "./pages/post/post.component";
import { PostsComponent } from "./pages/posts/posts.component";

const routes: Routes = [
  { path: "", component: PostsComponent },
  { path: "agregar", component: AgregarEditarComponent },
  { path: "editar/:id", component: AgregarEditarComponent },
  { path: ":id", component: PostComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
