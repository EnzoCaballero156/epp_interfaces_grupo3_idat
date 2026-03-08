import '../hojas-de-estilo/Button.css'
import googleIcon from '../img/google.png'

const Button = (props) => {
    return (
        <button className={props.type}>
            {props.type === 'round-button' ? <img src={googleIcon}/> : null}
            {props.texto}
        </button>
    )
}

export default Button