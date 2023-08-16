import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Colaborador = ({cor, img, nome, cargo, aoDeletar, id, favorito, aoFavoritar}) => {

    function favoritar() {
        aoFavoritar(id)
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    return(
        <div style={{background: cor}} className='card'>
            <AiFillCloseCircle size={25} onClick={() => aoDeletar(id)} className='deletar'></AiFillCloseCircle>
            <div className='card__superior'>
                <img  className='card__superior__img' src={img} alt='Foto de perfil'></img>
            </div>
            <div className='card__inferior'>
                <h4 className='card__inferior__nome'>{nome}</h4>
                <h5 className='card__inferior__profissao'>{cargo}</h5>
                <div className='favoritar'>
                    {favorito 
                        ? <AiFillHeart {...propsfavorito} color='red'/> 
                        : <AiOutlineHeart {...propsfavorito}/>}
                </div>
            </div>
        </div>
    )
}

export default Colaborador