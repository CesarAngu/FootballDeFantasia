import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <header className="register-header">
        <h1>Fantasy Football</h1>
        <Link to="/" className="back-button">Volver a Inicio</Link>
      </header>

      <form className="register-form">
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
  );
}

export default Register;
