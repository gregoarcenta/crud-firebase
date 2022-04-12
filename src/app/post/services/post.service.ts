import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Post } from "../interfaces/Post";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private firestore: AngularFirestore) {}

  //get posts
  getPosts() {
    return this.firestore.collection("post").snapshotChanges();
  }

  //getPost por id
  getPostById(id: string) {
    return this.firestore.collection("post").doc(id).valueChanges();
  }

  //create Post
  async createPost(post: Post) {
    try {
      const resp = await this.firestore.collection("post").add(post);
      return resp;
    } catch (error) {
      throw error;
    }
  }

  //update Post
  async updatePost(post: Post) {
    try {
      const resp = await this.firestore
        .collection("post")
        .doc(post.id)
        .update({ ...post });
      return resp;
    } catch (error) {
      throw error;
    }
  }

  //delete Post
  async deletePost(post: Post) {
    try {
      const resp = await this.firestore
        .collection("post")
        .doc(post.id)
        .delete();
      return resp;
    } catch (error) {
      throw error;
    }
  }
}
