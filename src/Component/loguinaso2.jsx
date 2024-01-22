import { useState } from "react";
import './Login.css'; 
import { useNavigate } from "react-router-dom";

export function Formu({ validar }) {
    const [nombre, setNombre] = useState("");
    const [contra, setContra] = useState("");
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);
    const navegador = useNavigate();
  
    const dejarPasar = (user) => {
      if (user === "rodrigo") {
        validar(true);
        // Usa la función `navegador` para redirigir a '/'
        navegador('/');
      }
    };
  
    const manejarEnviar = (evento) => {
      evento.preventDefault();
      if (nombre === "" || contra === "") {
        setError(true);
        return;
      }
      setError(false);
      setUser([nombre]);
      dejarPasar(user);
      console.log(user);
    };
  
  return (
    <div className="container">
      <div className="card">
        <h1 className="login">Login C:</h1>
        <div className="inputBox">
          <input
            type="text"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
            required
          />
          <span className="user">Username</span>
        </div>

        <div className="inputBox">
          <input
            type="password"
            value={contra}
            onChange={(evento) => setContra(evento.target.value)}
            required
          />
          <span>Password</span>
        </div>

        <button type="submit" className="enter" onClick={manejarEnviar}>
          Iniciar Sesion
        </button>
        {error && <p>Todos los campos deben ser completados</p>}
      </div>
    </div>
  );
}
