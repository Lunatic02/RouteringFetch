import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Contato from './Contato';
import Login from './Login';
import Produto from './Produto';

function App({ id }) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Produto />}></Route>
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
