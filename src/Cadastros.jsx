import { useState } from 'react'


function FormContato() {
  const [contato, setContato] = useState({
    nome: '',
    contato: ''
  })

  function handleChange(e) {
    setContato({ ...contato, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!contato.nome || !contato.contato) {
      alert('Preencha todos os campos!')
      return
    }
    console.log('Contato agendado:', contato)
    setContato({ nome: "", contato: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nome"
        value={contato.nome}
        onChange={handleChange}
        placeholder="Seu nome"
      />
      <input
        name="contato"
        value={contato.contato}
        onChange={handleChange}
        placeholder="Seu contato"
      />
      <button type="submit">Enviar</button>
    </form>
  )
}


function App() {
  return (
    <div>
      <FormContato />
    </div>
  )
};


export default App;