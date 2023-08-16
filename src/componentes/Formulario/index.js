import './Formulario.css'
import CampoInput from '../CampoInput'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [img, setImg] = useState('');
    const [time, setTime] = useState('');
    
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('#000000');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            img,
            time
        })
        setNome('')
        setCargo('')
        setImg('')
        setTime('')
    }

    return (
        <section className='section__formulario'>
            <form onSubmit={aoSalvar}>
                <h2 className='formulario__titulo'>Preencha os dados para criar o card do colaborador</h2>

                <CampoInput 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome">
                </CampoInput>

                <CampoInput 
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)} 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu o cargo">
                </CampoInput>

                <CampoInput 
                    valor={img} 
                    aoAlterado={valor => setImg(valor)} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem">
                </CampoInput>

                <ListaSuspensa 
                    valor={time} 
                    aoAlterado={valor => setTime(valor)} 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.nomeDosTimes}>
                </ListaSuspensa>

                <Botao>Criar card</Botao>
            </form>
            <form onSubmit={(event) => {
                event.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor: corTime})}}>
                <h2 className='formulario__titulo'>Preencha os dados para criar um novo time</h2>

                <CampoInput 
                    valor={nomeTime} 
                    aoAlterado={valor => setNomeTime(valor)} 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time">
                </CampoInput>

                <CampoInput
                    type='color' 
                    valor={corTime} 
                    aoAlterado={valor => setCorTime(valor)} 
                    obrigatorio 
                    label="Cargo" 
                    placeholder="Digite a cor do time">
                </CampoInput>

                <Botao>Criar time</Botao>
            </form>
        </section>
    )

}

export default Formulario