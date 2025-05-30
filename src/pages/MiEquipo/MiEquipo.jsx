import { Link } from 'react-router-dom';
import './MiEquipo.css';

function MiEquipo() {
  const jugadores = [
    { id: 1, nombre: 'Kylian Mbappé', posicion: 'Delantero', valor: '€120M' },
    { id: 2, nombre: 'Kevin De Bruyne', posicion: 'Centrocampista', valor: '€95M' },
    { id: 3, nombre: 'Virgil van Dijk', posicion: 'Defensor', valor: '€85M' },
    { id: 4, nombre: 'Jude Bellingham', posicion: 'Centrocampista', valor: '€110M' },
    { id: 5, nombre: 'Thibaut Courtois', posicion: 'Portero', valor: '€60M' },
    { id: 6, nombre: 'Achraf Hakimi', posicion: 'Defensor', valor: '€65M' },
    { id: 7, nombre: 'Joshua Kimmich', posicion: 'Centrocampista', valor: '€80M' },
    { id: 8, nombre: 'Pedri', posicion: 'Centrocampista', valor: '€100M' },
    { id: 9, nombre: 'Alphonso Davies', posicion: 'Defensor', valor: '€70M' },
    { id: 10, nombre: 'Mike Maignan', posicion: 'Portero', valor: '€50M' },
    { id: 11, nombre: 'Bukayo Saka', posicion: 'Delantero', valor: '€90M' },
    { id: 12, nombre: 'Frenkie de Jong', posicion: 'Centrocampista', valor: '€75M' },
    { id: 13, nombre: 'Rúben Dias', posicion: 'Defensor', valor: '€80M' },
    { id: 14, nombre: 'Marc-André ter Stegen', posicion: 'Portero', valor: '€90M' },
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
