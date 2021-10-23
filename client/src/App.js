import { Link, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="header">
        <h2>Vibes</h2>
      </div>

      <div className="navbar">
        <Link to="/" exact className="nav-link">
          <span className="nav-button">Home</span>
        </Link>
        <Link to="/new-vibe" className="nav-link">
          <span className="nav-button">New Vibe</span>
        </Link>
        <Link to="/about" className="nav-link">
          <span className="nav-button">About</span>
        </Link>
        <Link to="/contact" className="nav-link">
          <span className="nav-button">Contact Me</span>
        </Link>
      </div>

    </div>
  );
}

export default App;