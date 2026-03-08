import Button from "./Button.jsx"
import '../hojas-de-estilo/Form.css'
import { Link } from "react-router-dom"

const Form = ({ children, titulo, subtitulo, cuentaGoogle, textoEnviar, to, textoAdicional }) => {
    return (
        <div className="form">
            <div className="form-header">
                <p className="titulo-form">{titulo}</p>
                <p className="subtitulo-form">{subtitulo}</p>
                {cuentaGoogle && (
                    <>
                        <Button texto="Continuar con Google" type="round-button"/>
                        <p>O continuar con el correo electrónico</p>
                    </>
                )}
            </div>
            <div className="form-content">
                {children}
            </div>
            <div className="form-footer">
                <Link to={to}>
                    <Button texto={textoEnviar} type="submit-button" />
                </Link>
                {textoAdicional && (
                    <p>{textoAdicional}</p>
                )}
            </div>
        </div>
    )
}

export default Form