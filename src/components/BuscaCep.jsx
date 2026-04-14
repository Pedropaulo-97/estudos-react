import { useEffect, useState } from 'react'

function BuscaCep() {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState(null)
  const [buscando, setBuscando] = useState(false)

  useEffect(() => {
    if (cep.length === 8) {
      setBuscando(true)
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
          setEndereco(data)
          setBuscando(false)
        })
    }
  }, [cep])

  return (
    
    
    <div>
      <h2>Pagina de buscar CEP</h2> <br/>
      <label htmlFor="cep">CEP: </label>
      <input
        id="cep"
        name="cep"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="00000-000"
      />

      {buscando && <p>Buscando...</p>}

      {endereco && (
        <div>
          <p>{endereco.logradouro}</p>
          <p>{endereco.bairro}</p>
          <p>{endereco.localidade}</p>
        </div>
      )}
    </div>
  )
}


export default BuscaCep