import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostRoutingModule } from "./post-routing.module";

//components
import { PostsComponent } from "./pages/posts/posts.component";
import { AgregarEditarComponent } from "./pages/agregar-editar/agregar-editar.component";
import { PostItemComponent } from "./components/post-item/post-item.component";
import { IconsModule } from "../icons/icons.module";
import { PostComponent } from "./pages/post/post.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PostsComponent,
    AgregarEditarComponent,
    PostItemComponent,
    PostComponent,
  ],
  imports: [CommonModule, PostRoutingModule, ReactiveFormsModule, IconsModule],
})
export class PostModule {}
