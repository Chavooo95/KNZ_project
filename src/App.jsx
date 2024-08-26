import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Biografia from './views/Biografia';
import Colaboraciones from './views/Colaboraciones';
import Decoracion from './views/Decoracion';
import PuestaEnEscena from './views/PuestaEnEscena';
import VestuarioEscenico from './views/VestuarioEscenico';


function App() {
  

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/colaboraciones" element={<Colaboraciones />} />
        <Route path="/decoracion" element={<Decoracion />} />
        <Route path="/puesta-en-escena" element={<PuestaEnEscena />} />
        <Route path="/vestuario-escenico" element={<VestuarioEscenico />} />
      </Routes>
    </>
  );
}

export default App;
