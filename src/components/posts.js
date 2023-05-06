import React from "react";
import Post from "./Post";

const posts = [
  {
    id: 1,
    imageusuario: "assets/img/meowed.svg",
    imagePost: "assets/img/gato-telefone.svg",
    imageFollower: "assets/img/respondeai.svg",
    usuarioFollower: "respondeai",
    numberPeople: 100,
    usuario: "meowed",
    numberLike: 0 
  },
  {
    id: 2,
    imageusuario: "assets/img/barked.svg",
    imagePost: "assets/img/dog.svg",
    imageFollower: "assets/img/adorable_animals.svg",
    usuarioFollower: "adorable_animals",
    numberPeople: 100,
    usuario: "adorable_animals",
    numberLike: 0 
  },
  {
    id: 3,
    imageusuario: "assets/img/meowed.svg",
    imagePost: "assets/img/gato-telefone.svg",
    imageFollower: "assets/img/adorable_animals.svg",
    usuarioFollower: "adorable_animals",
    numberPeople: 100,
    usuario: "adorable_animals",
    numberLike: 0 
  },
];

export default function Posts() {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
