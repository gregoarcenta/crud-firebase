import { Component, OnInit } from "@angular/core";
import { Post } from "../../interfaces/Post";
import { PostService } from "../../services/post.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  loading: boolean = true;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts.map((e) => {
        return { ...(e.payload.doc.data() as Post), id: e.payload.doc.id };
      });
      this.loading = false;
    });
  }

  deletePost(post: Post) {
    this.postService
      .deletePost(post)
      .then((response) => {
        Swal.fire("Eliminado!", "Tu post a sido eliminado!", "success");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error!", "No se pudo eliminar el post!", "error");
      });
  }
}
