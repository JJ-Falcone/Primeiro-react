import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const colaboradoresRecuperados = JSON.parse(localStorage.getItem('colaboradores')) === null ? [] : JSON.parse(localStorage.getItem('colaboradores'))

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e gestão',
      cor: '#FF8A29',
    }

  ])

  const [colaboradores, setColaboradores] = useState(colaboradoresRecuperados)
  let colaboradoresTemporarios = colaboradoresRecuperados

  const aoNovoColaboradorAdicionado = (colaborador) => {
    colaborador.id = uuidv4()
    colaboradoresTemporarios = [...colaboradoresRecuperados, colaborador]
    localStorage.setItem('colaboradores', JSON.stringify(colaboradoresTemporarios))
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    colaboradoresTemporarios = colaboradores.filter(colaborador => colaborador.id !== id)
    localStorage.setItem('colaboradores', JSON.stringify(colaboradoresTemporarios))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id)colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }





  return (
    <div className="App">
      <Banner></Banner>

      <Formulario cadastrarTime={cadastrarTime} nomeDosTimes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} >
      </Formulario>

      {times.map(time => <Time
        mudarCor={mudarCorDoTime}
        id={time.id}
        key={time.nome}
        nome={time.nome}
        cor={time.cor}
        aoDeletar={deletarColaborador}
        aoFavoritar={resolverFavorito}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      ></Time>)}

      <Footer></Footer>
    </div>
  );
}

export default App;
