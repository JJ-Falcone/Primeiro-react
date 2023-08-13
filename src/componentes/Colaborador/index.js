import './Colaborador.css'

const Colaborador = ({cor, img, nome, cargo}) => {
    return(
        <div style={{background: cor}} className='card'>
            <div className='card__superior'>
                <img  className='card__superior__img' src={img} alt='Foto de perfil'></img>
            </div>
            <div className='card__inferior'>
                <h4 className='card__inferior__nome'>{nome}</h4>
                <h5 className='card__inferior__profissao'>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador