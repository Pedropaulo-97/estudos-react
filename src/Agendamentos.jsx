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
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        name="nome"
        value={consulta.nome}
        onChange={handleChange}
        placeholder="Nome completo"
      />

      <label htmlFor="data">Data</label>
      <input
        id="data"
        type="date"
        name="data"
        value={consulta.data}
        onChange={handleChange}
        placeholder="Data da consulta"
      />

      <label htmlFor="horario">Horario</label>
      <input
        id="horario"
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


export default AgendamentoConsulta
