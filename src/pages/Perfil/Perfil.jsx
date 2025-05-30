import { useNavigate } from 'react-router-dom';
import './Perfil.css';

function Perfil() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí podrías limpiar datos de sesión si los usas (ej. localStorage.clear())
    navigate('/login');
  };

  return (
    <div className="perfil-container">
      <button className="back-button" onClick={() => navigate(-1)}>Volver atrás</button>
      <h1 className="perfil-title">Perfil de Usuario</h1>
      <div className="perfil-info">
        <p><strong>Nombre:</strong> Juan Pérez</p>
        <p><strong>Correo Electrónico:</strong> juan.perez@gmail.com</p>
        <p><strong>Miembro desde:</strong> Enero 2023</p>
        {/* Aquí puedes añadir más info o foto de perfil */}
      </div>

      {/* Botón de Cerrar Sesión */}
      <button className="logout-button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default Perfil;
