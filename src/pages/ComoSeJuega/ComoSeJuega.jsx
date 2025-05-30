import { Link } from 'react-router-dom';
import './ComoSeJuega.css';

function ComoSeJuega() {
  return (
    <div className="como-container">
      <header className="como-header">
        <h1>¿Cómo se Juega?</h1>
        <nav className="como-nav">
          <Link to="/perfil" className="nav-btn">Perfil</Link>
          <Link to="/jugadores" className="nav-btn">Jugadores</Link>
          <Link to="/miequipo" className="nav-btn">Mi Equipo</Link>
        </nav>
      </header>

      <section className="como-section">
        <h2>Formación del equipo</h2>
        <p>Escoge tus jugadores favoritos para formar un equipo competitivo. Elige titulares y suplentes estratégicamente.</p>
      </section>

      <section className="como-section">
        <h2>Sistema de puntuación</h2>
        <p>Los jugadores obtienen puntos según su rendimiento en partidos reales: goles, asistencias, porterías a cero, etc.</p>
      </section>

      <section className="como-section">
        <h2>Ligas</h2>
        <p>Compite en la Liga Premier. Participa contra tus amigos o en ligas públicas para demostrar tus habilidades.</p>
      </section>

      <section className="como-section">
        <h2>Transferencias y comodines</h2>
        <p>Realiza cambios semanales y usa comodines para renovar tu equipo sin penalización de puntos.</p>
      </section>
    </div>
  );
}

export default ComoSeJuega;
