import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Jugadores.css';

const mercadoJugadores = [
  {
    id: 1,
    nombre: 'Lionel Messi',
    imagen: 'messi.png',
    valor: '€100M',
    tiempo: 'hace 12 min',
  },
  {
    id: 2,
    nombre: 'Cristiano Ronaldo',
    imagen: 'ronaldo.png',
    valor: '€90M',
    tiempo: 'hace 30 min',
  },
];

const opcionesJugadores = [
  {
    id: 3,
    nombre: 'Erling Haaland',
    imagen: 'haaland.png',
    valor: '€110M',
    liga: 'Premier League',
    estado: 'Alineable',
  },
  {
    id: 4,
    nombre: 'Vinícius Jr.',
    imagen: 'vini.png',
    valor: '€95M',
    liga: 'Premier League',
    estado: 'Lesionado',
  },
];

const historicoJugadores = [
  {
    id: 5,
    nombre: 'Pelé',
    imagen: 'pele.png',
  },
  {
    id: 6,
    nombre: 'Diego Maradona',
    imagen: 'maradona.png',
  },
  {
    id: 7,
    nombre: 'Zinedine Zidane',
    imagen: 'zidane.png',
  },
];

function Jugadores() {
  const [seccion, setSeccion] = useState('mercado');
  const [compraVentaTab, setCompraVentaTab] = useState('compra'); // Para Mis Opciones
  const navigate = useNavigate();

  return (
    <div className="jugadores-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Volver atrás
      </button>

      <h1 className="jugadores-header">FANTASY FOOTBALL</h1>

      <div className="tab-buttons">
        <button
          className={seccion === 'mercado' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setSeccion('mercado')}
        >
          Mercado
        </button>
        <button
          className={seccion === 'opciones' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setSeccion('opciones')}
        >
          Mis Opciones
        </button>
        <button
          className={seccion === 'historico' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setSeccion('historico')}
        >
          Histórico
        </button>
      </div>

      <div className="jugadores-section">

        {seccion === 'mercado' &&
          mercadoJugadores.map((jugador) => (
            <div className="jugador-card" key={jugador.id}>
              <img src={jugador.imagen} alt={jugador.nombre} className="jugador-imagen" />
              <div className="jugador-info">
                <h3 className="jugador-nombre" style={{color: 'red'}}>{jugador.nombre}</h3>
                <p className="jugador-valor" style={{color: '#00ff88'}}>Valor de venta: {jugador.valor}</p>
                <p>
                  Has vendido a <strong>{jugador.nombre}</strong> a la Premier League por <strong>{jugador.valor}</strong>.
                </p>
                <span className="jugador-tiempo">{jugador.tiempo}</span>
              </div>
            </div>
          ))}

        {seccion === 'opciones' && (
          <>
            <div className="compra-venta-buttons">
              <button
                className={compraVentaTab === 'sinOfertas' ? 'tab-btn active morado' : 'tab-btn morado'}
                onClick={() => setCompraVentaTab('sinOfertas')}
              >
                Sin ofertas
              </button>
              <button
                className={compraVentaTab === 'compra' ? 'tab-btn active morado' : 'tab-btn morado'}
                onClick={() => setCompraVentaTab('compra')}
              >
                Compra y Venta
              </button>
            </div>

            {compraVentaTab === 'sinOfertas' && (
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <div style={{ fontSize: '3rem' }}>😞</div>
                <p>No has recibido ofertas de otros managers.</p>
              </div>
            )}

            {compraVentaTab === 'compra' &&
              opcionesJugadores.map((jugador) => (
                <div className="jugador-card" key={jugador.id}>
                  <img src={jugador.imagen} alt={jugador.nombre} className="jugador-imagen" />
                  <div className="jugador-info">
                    <h3 className="jugador-nombre">{jugador.nombre}</h3>
                    <p>Liga: Premier League</p>
                    <p>
                      Estado:{' '}
                      {jugador.estado === 'Alineable' ? (
                        <span style={{ color: 'green' }}>✔️ Alineable</span>
                      ) : (
                        <span style={{ color: 'red' }}>❌ Lesionado</span>
                      )}
                    </p>
                    <p>Valor: €{jugador.valor.replace('€', '')}M</p>
                    <button className="fichar-btn">Fichar</button>
                  </div>
                </div>
              ))}
          </>
        )}

        {seccion === 'historico' &&
          historicoJugadores.map((jugador) => (
            <div className="jugador-card" key={jugador.id}>
              <img src={jugador.imagen} alt={jugador.nombre} className="jugador-imagen" />
              <div className="jugador-info">
                <h3 className="jugador-nombre">{jugador.nombre}</h3>
                <p>Ícono del fútbol mundial.</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Jugadores;
