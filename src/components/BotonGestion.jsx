import React from "react"
import '../hojas-de-estilo/BotonGestion.css';

function BotonGestion(props) {
    return(
        <div className="contenedor-boton_gestion">
            <div className="texto-boton_gestion">
                <button>{props.texto}</button>
            </div>
        </div>
    );
}

export default BotonGestion