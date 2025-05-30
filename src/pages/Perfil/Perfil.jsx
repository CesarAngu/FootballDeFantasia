import { useNavigate } from 'react-router-dom';
import './Perfil.css';

function Perfil() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="perfil-container">
      <button className="back-button" onClick={() => navigate(-1)}>Volver atrás</button>
      <div className="perfil-content">
        <h1 className="perfil-title">Perfil de Usuario</h1>

        <div className="perfil-avatar">
          <img src="/usuario.png" alt="Usuario" />
        </div>

        <div className="perfil-info">
          <p><strong>Nombre:</strong> Juan Pérez</p>
          <p><strong>Correo Electrónico:</strong> juan.perez@gmail.com</p>
          <p><strong>Miembro desde:</strong> Enero 2023</p>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Perfil;
