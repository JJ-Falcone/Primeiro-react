import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const colaboradoresRecuperados = JSON.parse(localStorage.getItem('colaboradores')) === null ? [] : JSON.parse(localStorage.getItem('colaboradores'))
  const timesRecuperados = JSON.parse(localStorage.getItem('times')) === null ? [] : JSON.parse(localStorage.getItem('times'))

  const [colaboradores, setColaboradores] = useState(colaboradoresRecuperados)
  const [times, setTimes] = useState(timesRecuperados)

  let colaboradoresTemporarios = colaboradoresRecuperados
  let timesTemporarios = times


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
        timesTemporarios = times
        localStorage.setItem('times', JSON.stringify(timesTemporarios))
      }
      return time
    }))
  }

  function cadastrarTime(novoTime) {
    const idtemp = uuidv4()
    setTimes([...times, {...novoTime, id: idtemp}])
    timesTemporarios = [...times, {...novoTime, id: idtemp}]
    localStorage.setItem('times', JSON.stringify(timesTemporarios))
  }

  function resolverFavorito(id) { 
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id)colaborador.favorito = !colaborador.favorito;
      colaboradoresTemporarios = colaboradores
      localStorage.setItem('colaboradores', JSON.stringify(colaboradoresTemporarios))
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
