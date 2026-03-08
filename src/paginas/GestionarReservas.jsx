import Header from '../components/Header.jsx';
import BotonGestion from '../components/BotonGestion.jsx';
import '../hojas-de-estilo/GestionarReservas.css';

function GestionarReservas() {
  return (
    <div>
      <Header />
      <div className="contenedor-gr">
        <div className="izquierda-gr">
          <h1>Gestión de reservas</h1>
        </div>
        <div className="derecha-gr">
          <h2>Elige una acción a realizar</h2>
          <div className="cartas">
            <BotonGestion
            texto='Administrar reservas'/>
            <BotonGestion
            texto='Gestionar Horarios'/>
            <BotonGestion
            texto='Calendario de reservas realizadas'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestionarReservas;