import React from "react";
import Post from "./Post";

const posts = [
  {
    id: 1,
    imageusuario: "assets/img/gato-telefone.svg",
    imagePost: "assets/img/gato-telefone.svg",
    imageFollower: "assets/img/gato-telefone.svg",
    usuarioFollower: "respondeai",
    numberPeople: 700,
    usuario: "teste",
    numberLike: 0 
  },
  {
    id: 2,
    imageusuario: "assets/img/gato-telefone.svg",
    imagePost: "assets/img/gato-telefone.svg",
    imageFollower: "assets/img/gato-telefone.svg",
    usuarioFollower: "respondeai",
    numberPeople: 80,
    usuario: "teste",
    numberLike: 0 
  },
  {
    id: 3,
    imageusuario: "assets/img/gato-telefone.svg",
    imagePost: "assets/img/gato-telefone.svg",
    imageFollower: "assets/img/gato-telefone.svg",
    usuarioFollower: "respondeai",
    numberPeople: 985,
    usuario: "teste",
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
