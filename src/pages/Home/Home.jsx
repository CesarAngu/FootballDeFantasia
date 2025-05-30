import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-layout">
      <div className="home-left">
        <h1 className="title">Fantasy Football</h1>
        <p className="subtitle">¡Crea tu equipo ideal y compite!</p>

        <div className="buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Sign Up</Link>
        </div>
      </div>

      <div className="home-right">
        <img src="/futbol.png" alt="Football players" className="football-img" />
      </div>
    </div>
  );
}

export default Home;
