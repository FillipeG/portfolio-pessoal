import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SobreMim from './pages/SobreMim';
import Projetos from './pages/Projetos';
import Experiencias from './pages/Experiencias';
import Contato from './pages/Contato';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SobreMim />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}