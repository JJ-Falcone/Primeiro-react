import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return(
        props.colaboradores.length > 0 && <section className='section-time' style={{backgroundColor: hexToRgba(props.cor, '0.6')}}>
            <input value={props.cor} onChange={event => props.mudarCor(event.target.value, props.id)} type='color' className='input-cor'></input>
            <h3 className='time__titulo'>{props.nome}</h3>
            <hr style={{borderColor: props.cor}}></hr>
            <div className='div__colaboradores'>
            {props.colaboradores.map(colaborador => {
                return (<Colaborador 
                            id={colaborador.id}
                            key={colaborador.nome} 
                            img={colaborador.img}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo} 
                            cor={props.cor} 
                            favorito={colaborador.favorito} 
                            aoFavoritar={props.aoFavoritar}
                            aoDeletar={props.aoDeletar}>
                        </Colaborador>)
            })}
            </div>
        </section>
    )
}

export default Time