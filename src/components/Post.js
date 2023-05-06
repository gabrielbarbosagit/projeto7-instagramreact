import React, { useState } from 'react';

export default function Post(props) {
  const { imageusuario, imagePost, imageFollower, usuarioFollower, usuario } = props.post;

  const [bookmark, setBookmark] = useState(true);
  const [heart, setHeart] = useState('heart-outline');
  const [color, setColor] = useState('#000000');
  const [numberLike, setNumberLike] = useState(() => props.post.numberPeople);
  const [liked, setLiked] = useState(false);
  const [canUnlike, setCanUnlike] = useState(false); // novo estado

  function likePost() {
    if (liked) { // Verifica se a imagem já foi curtida
      return; // Se já foi curtida, não faz nada
    }
    if (heart === 'heart') {
      setHeart('heart-outline');
      setColor('#000000');
      setNumberLike(numberLike - 1);
      setLiked(false);
      setCanUnlike(true); // atualiza o estado canUnlike para true
    } else if (heart === 'heart-outline') {
      setHeart('heart');
      setColor('#FF0000');
      setNumberLike(numberLike + 1);
      setLiked(true);
      setCanUnlike(true); // atualiza o estado canUnlike para true
    }
  }

  function unlikePost() {
    if (canUnlike) { // verifica se o usuário pode retirar o like
      setHeart('heart-outline');
      setColor('#000000');
      setNumberLike(numberLike - 1);
      setLiked(false);
      setCanUnlike(false); // atualiza o estado canUnlike para false
    }
  }

  return (
    <div data-test="post" className="post">
      <div className="topo">
        <div className="usuario">
          <img src={imageusuario} alt={imageusuario} />
          {usuario}
        </div>

        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img data-test="post-image" onDoubleClick={likePost} src={imagePost} alt={imagePost} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" name={heart} style={{ color: color }} onClick={() => {

              if (liked) {
                unlikePost();
              } else {
                likePost();
              }
            }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>

          <div>
            <ion-icon class="mark" data-test="save-post" onClick={() => { setBookmark(!bookmark); }}

              name={bookmark === true ? 'bookmark-outline' : 'bookmark'}

            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">

          <img src={imageFollower} alt={imageFollower} target="_blank" rel="noreferrer" />

          <div data-test="likes-number" className="texto">
            Curtido por <strong>{usuarioFollower}</strong> e <strong> outras {numberLike}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
