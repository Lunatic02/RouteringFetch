import React from 'react';
import styles from '../components/Produto.module.css';
import { useParams } from 'react-router-dom';

function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = React.useState({
    nome: '',
    preco: '',
    descricao: '',
    fotos: [{ src: '', titulo: 'string' }],
  });
  const [error, setError] = React.useState({ err: false, message: '' });
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchProduto(url) {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (err) {
        setError({ err: true, message: err.message });
      } finally {
        setLoading(false);
      }
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);
  if (loading) return <div className="loading"></div>;
  if (error.err) return <p>{error.message}</p>;
  if (produto.nome === '') return null;

  return (
    <div className={styles.produto + ' animeLeft'}>
      <div>
        {produto.fotos.map((foto) => (
          <img src={foto.src} alt={foto.titulo} key={foto.src} />
        ))}
      </div>
      <div>
        {' '}
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </div>
  );
}

export default Produto;
