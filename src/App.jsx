import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import ComoSeJuega from './pages/ComoSeJuega/ComoSeJuega';
import Jugadores from './pages/Jugadores/Jugadores';
import Perfil from './pages/Perfil/Perfil';
import MiEquipo from './pages/MiEquipo/MiEquipo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/comosejuega" element={<ComoSeJuega />} />
      <Route path="/jugadores" element={<Jugadores />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/miequipo" element={<MiEquipo />} />
    </Routes>
  );
}

export default App;
