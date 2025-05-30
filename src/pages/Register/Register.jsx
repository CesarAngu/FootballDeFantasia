import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <header className="auth-header">
          <h1>Fantasy Football</h1>
          <Link to="/" className="back-button">Volver a Inicio</Link>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo Electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <input type="password" placeholder="Confirmar Contraseña" required />
          <button type="submit">Registrarse</button>
        </form>

        <section className="register-icons">
          <div>Crea tu equipo ⚽</div>
          <div>Compite en liga 🏆</div>
          <div>Gana premios 🎁</div>
        </section>
      </div>

      <div className="auth-right">
        <img src="/futbol.png" alt="Fútbol" className="auth-image" />
      </div>
    </div>
  );
}

export default Register;
