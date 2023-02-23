import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Produto = () => {
  const params = useParams();
  const [preco, setPreco] = useState('');
  const [nome, setNome] = useState('');
  const [fotosUrl, setFotosUrl] = useState('');
  const [descricao, setDescricao] = useState('');

  const api = fetch(
    `https://ranekapi.origamid.dev/json/api/produto/${params.id}`,
  )
    .then((data) => {
      return data.json();
    })
    .then((post) => {
      setNome(post.nome);
      setPreco(post.preco);
      setDescricao(post.descricao);
      setFotosUrl(post.fotos[0].src);
    });

  return (
    <div>
      <h1>
        Produto:{nome}
        <br />
        Preco: {preco}
        <br></br>
        <img src={fotosUrl} alt="" />
        <br />
      </h1>
    </div>
  );
};

export default Produto;
