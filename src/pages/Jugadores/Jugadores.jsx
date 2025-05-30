import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Jugadores.css';

const mercadoJugadores = [
  {
    id: 1,
    nombre: 'Lionel Messi',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Leo_Messi_20180626.jpg',
    valor: '€100M',
    tiempo: 'hace 12 min',
  },
  {
    id: 2,
    nombre: 'Cristiano Ronaldo',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg',
    valor: '€90M',
    tiempo: 'hace 30 min',
  },
];

const opcionesJugadores = [
  {
    id: 3,
    nombre: 'Erling Haaland',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Erling_Haaland_Dortmund_2020.jpg',
    valor: '€110M',
    liga: 'Premier League',
    estado: 'Alineable', // Puede ser 'Alineable' o 'Lesionado'
  },
  {
    id: 4,
    nombre: 'Vinícius Jr.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Vinicius_Jr_2022.jpg',
    valor: '€95M',
    liga: 'Premier League',
    estado: 'Lesionado',
  },
];

const historicoJugadores = [
  {
    id: 5,
    nombre: 'Pelé',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Pele.jpg',
  },
  {
    id: 6,
    nombre: 'Diego Maradona',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Diego_Maradona_1986.jpg',
  },
  {
    id: 7,
    nombre: 'Zinedine Zidane',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Zinedine_Zidane_2006.jpg',
  },
];

function Jugadores() {
  const [seccion, setSeccion] = useState('mercado');
  const [compraVentaTab, setCompraVentaTab] = useState('compra'); // Para Mis Opciones
  const navigate = useNavigate();

  return (
    <div className="jugadores-container">
      {/* Botón Volver atrás */}
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

      {/* Contenido según sección activa */}
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
            {/* Navegador dentro de Mis Opciones */}
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

            {/* Contenido según sub-tab */}
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
