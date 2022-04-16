import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faPen, faTrashCan, faEye } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Post } from "../../interfaces/Post";

@Component({
  selector: "post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.css"],
})
export class PostItemComponent implements OnInit {
  @Input() post!: Post;
  @Output() onDeletePost: EventEmitter<Post> = new EventEmitter();

  faPen = faPen;
  faTrash = faTrashCan;
  faEye = faEye;

  options = {
    placement: "bottom",
    showDelay: 100,
    hideDelay: 100,
  };

  constructor() {}

  ngOnInit(): void {}

  async deletePost(post: Post) {
    const result = await Swal.fire({
      title: "Estas seguro de que quieres eliminar este post?",
      text: "Esta acción es irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar post!",
    });
    if (result.isConfirmed) {
      this.onDeletePost.emit(post);
    }
  }
}
