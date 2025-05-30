import { Link } from 'react-router-dom';
import './ComoSeJuega.css';

function ComoSeJuega() {
  return (
    <div className="como-container">
      <nav className="como-nav">
        <Link to="/perfil" className="nav-btn">Perfil</Link>
        <Link to="/jugadores" className="nav-btn">Jugadores</Link>
        <Link to="/miequipo" className="nav-btn">Mi Equipo</Link>
      </nav>

      <h1 className="como-title">¿Cómo se juega?</h1>

      <div className="card-grid">
        <div className="card">
          <img src="/alineacion.png" alt="Formación" />
          <h2>Formación del equipo</h2>
          <p>Elige una plantilla de 15 jugadores con un presupuesto limitado.</p>
        </div>

        <div className="card">
          <img src="/sistemapuntuacion.png" alt="Puntos" />
          <h2>Sistema de puntuación</h2>
          <p>Los jugadores ganan puntos en base a su rendimiento en partidos reales.</p>
        </div>

        <div className="card">
          <img src="/liga.png" alt="Ligas" />
          <h2>Ligas</h2>
          <p>Compite contra amigos u otros en la liga premier.</p>
        </div>

        <div className="card">
          <img src="/transferencia.png" alt="Transferencias" />
          <h2>Transferencias y comodines</h2>
          <p>Cambia jugadores en tu plantilla cada semana para obtener la mayor cantidad de puntos.</p>
        </div>
      </div>
    </div>
  );
}

export default ComoSeJuega;
