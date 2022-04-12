import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Post } from "../../interfaces/Post";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  postId!: string;
  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.params["id"];
    this.fillInputsPost(this.postId);
  }

  fillInputsPost(id: string) {
    if (id) {
      this.postService.getPostById(id).subscribe((post) => {
        this.post = post as Post;
      });
    }
  }
}
