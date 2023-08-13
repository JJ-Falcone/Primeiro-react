import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return(
        props.colaboradores.length > 0 && <section className='section-time' style={{backgroundColor: props.corSecundaria}}>
            <h3 className='time__titulo'>{props.nome}</h3>
            <hr style={{borderColor: props.corPrimaria}}></hr>
            <div className='div__colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} img={colaborador.img} nome={colaborador.nome} cargo={colaborador.cargo} cor={props.corPrimaria}></Colaborador>)}
            </div>
        </section>
    )
}

export default Time