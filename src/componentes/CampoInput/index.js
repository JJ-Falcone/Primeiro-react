import './CampoInput.css'

const CampoInput = ({type = 'text', label, placeholder, valor, aoAlterado, obrigatorio}) => {


    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo-input campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}>
            </input>
        </div>
    )
}

export default CampoInput