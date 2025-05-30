import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/comosejuega');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <header className="auth-header">
          <h1>Fantasy Football</h1>
          <Link to="/register" className="btn-link">Registrarse</Link>
        </header>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Correo Electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>

      <div className="auth-right">
        <img src="/futbol.png" alt="Fútbol" className="auth-image" />
      </div>
    </div>
  );
}

export default Login;
