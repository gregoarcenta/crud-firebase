import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "../../interfaces/Post";
import { PostService } from "../../services/post.service";
import Swal from "sweetalert2";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-agregar-editar",
  templateUrl: "./agregar-editar.component.html",
  styleUrls: ["./agregar-editar.component.css"],
})
export class AgregarEditarComponent implements OnInit {
  postId!: string;
  post!: Post;

  faArrowLeft = faArrowLeft;

  postForm: FormGroup = this.fb.group({
    autor: ["", Validators.required],
    title: ["", Validators.required],
    content: ["", Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.params["id"];
    this.fillInputsPost(this.postId);
  }

  fillInputsPost(id: string) {
    if (id) {
      this.postService.getPostById(id).subscribe((post) => {
        this.postForm.reset({ ...(post as object) });
      });
    }
  }

  submit() {
    if (this.postForm.invalid) {
      console.log("ERROR: Formulario invalido");
    } else {
      if (this.postId) {
        this.postService
          .updatePost({ ...this.postForm.value, id: this.postId })
          .then((resp) => {
            Swal.fire("Post actualizado exitosamente!", "", "success");
            this.router.navigate(["posts"]);
          })
          .catch((error) => {
            console.log(error);
            Swal.fire("Error", "No se pudo actualizar el post", "error");
          });
      } else {
        this.postService
          .createPost({ ...this.postForm.value })
          .then((resp) => {
            Swal.fire("Post guardado exitosamente!", "", "success");
            this.router.navigate(["posts"]);
          })
          .catch((error) => {
            console.log(error);
            Swal.fire("Error", "No se pudo crear el post", "error");
          });
      }
    }
  }
}
