import '../hojas-de-estilo/FormInput.css';

const FormInput = (props) => {
    return (
        <div className="form-input">
            <p className="label-form">{props.label}</p>
            <input type="text" className={props.type}/>
        </div>
    )
}

export default FormInput