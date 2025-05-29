import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Fantasy Football</h1>
        <Link to="/register" className="register-button">Registrarse</Link>
      </header>

      <form className="login-form">
        <input type="email" placeholder="Correo Electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
