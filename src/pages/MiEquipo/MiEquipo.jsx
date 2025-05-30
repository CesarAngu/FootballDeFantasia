import { Link } from 'react-router-dom';
import './MiEquipo.css';

function MiEquipo() {
  const jugadores = [
    { id: 1, nombre: 'Kylian Mbappé', posicion: 'Delantero', valor: '€120M' },
    { id: 2, nombre: 'Kevin De Bruyne', posicion: 'Centrocampista', valor: '€95M' },
    { id: 3, nombre: 'Virgil van Dijk', posicion: 'Defensor', valor: '€85M' },
  ];

  return (
    <div className="equipo-container">
      <Link to="/comosejuega" className="back-button">Volver Atrás</Link>
      <h1>Mi Equipo</h1>
      <div className="equipo-lista">
        {jugadores.map(jugador => (
          <div className="jugador-card" key={jugador.id}>
            <h3>{jugador.nombre}</h3>
            <p>{jugador.posicion}</p>
            <p>{jugador.valor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiEquipo;
