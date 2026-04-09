import { useState } from 'react'


function FormContato() {
  const [contato, setContato] = useState({
    nome: '',
    telefone: ''
  })

  function handleChange(e) {
    setContato({ ...contato, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!contato.nome || !contato.telefone) {
      alert('Preencha todos os campos!')
      return
    }
    console.log('Contato agendado:', contato)
    setContato({ nome: "", telefone: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        name="nome"
        value={contato.nome}
        onChange={handleChange}
        placeholder="Nome completo"
      />

      <label htmlFor="telefone">Contato</label>
      <input
        id="telefone"
        name="telefone"
        value={contato.telefone}
        onChange={handleChange}
        placeholder="(85) 98585-8585"
      />
      <button type="submit">Enviar</button>
    </form>
  )
}


export default FormContato