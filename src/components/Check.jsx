import '../hojas-de-estilo/Check.css'

const Check = (props) => {
    return (
        <div className="check">
            <input type="checkbox"/>
            <p>{props.label}</p>
        </div>
    )
}

export default Check