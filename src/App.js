import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Produtos from './components/Produtos';
import Header from './components/Header';
import Footer from './components/Footer';
import Contato from './components/Contato';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
