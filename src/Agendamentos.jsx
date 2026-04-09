import { useState } from 'react'


function AgendamentoConsulta() {
  const [consulta, setConsulta] = useState({
    nome: '',
    data: '',
    horario: ''
  })

  function handleChange(e) {
    setConsulta({ ...consulta, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!consulta.nome) {
      alert('Preencha o seu nome!')
      return
    }
    console.log('Consulta agendada:', consulta)
    setConsulta({ nome: "", data: "", horario: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nome"
        value={consulta.nome}
        onChange={handleChange}
        placeholder="Nome completo"
      />
      <input
        type="date"
        name="data"
        value={consulta.data}
        onChange={handleChange}
        placeholder="Data da consulta"
      />
      <input
        type='time'
        name="horario"
        value={consulta.horario}
        onChange={handleChange}
        placeholder="Horario da consulta"
      />
      <button type="submit">Marcar consulta</button>
    </form>
  )
}



function App() {
  return (
    <div>
      <AgendamentoConsulta />
    </div>
  )
};


export default App;
