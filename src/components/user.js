import React, { useState } from 'react';

export default function User() {
    const [meuUsuario, setName] = useState('catanacomics');
    const [minhaImagem, setImage] = useState('assets/img/catanacomics.svg');

    function mudarUsuario() {
        const novoUsuario = prompt('Escolha um novo Nome');
        if (novoUsuario != null && novoUsuario != undefined && novoUsuario != "" && novoUsuario != " ") {
            setName(novoUsuario);
        }
    }

    function mudarImagem() {
        const novaImagem = prompt('Escolha uma nova Imagem');
        if (novaImagem != null && novaImagem != undefined && novaImagem != "" && novaImagem != " ") {
            setImage(novaImagem);
        }
    }

    return (
        <div class="usuario">
            <img data-test="profile-image" onClick={mudarImagem} src={minhaImagem} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test="name">{meuUsuario}</strong>
                    <ion-icon data-test="edit-name" onClick={mudarUsuario} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}