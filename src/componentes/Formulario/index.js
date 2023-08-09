import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react';

const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            img,
            time
        })
    }

    return (
        <section className='section__formulario'>
            <form onSubmit={aoSalvar}>
                <h2 className='formulario__titulo'>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome">
                </CampoTexto>

                <CampoTexto 
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)} 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu o cargo">
                </CampoTexto>

                <CampoTexto 
                    valor={img} 
                    aoAlterado={valor => setImg(valor)} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem">
                </CampoTexto>

                <ListaSuspensa 
                    valor={time} 
                    aoAlterado={valor => setTime(valor)} 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times}>
                </ListaSuspensa>

                <Botao>Criar card</Botao>
            </form>
        </section>
    )

}

export default Formulario