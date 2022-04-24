import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostRoutingModule } from "./post-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { TooltipModule } from "ng2-tooltip-directive";

//components
import { PostsComponent } from "./pages/posts/posts.component";
import { AgregarEditarComponent } from "./pages/agregar-editar/agregar-editar.component";
import { PostItemComponent } from "./components/post-item/post-item.component";
import { PostComponent } from "./pages/post/post.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [
    PostsComponent,
    AgregarEditarComponent,
    PostItemComponent,
    PostComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TooltipModule,
    NgxSkeletonLoaderModule.forRoot({
      animation: "pulse",
    }),
  ],
})
export class PostModule {}
