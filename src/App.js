import { useEffect, useState } from 'react'

function BuscaCep() {
  const [cep, setCep] = useState(8)
  const [buscando, setBuscando] = useState(true)


  useEffect(() => {

    fetch('https://viacep.com.br/ws/${cep}/json/')
      .then(res => res.json())
      .then(data => {
        setCep(data)
        setBuscando(false)
      })
  }, [])

    if (buscando) return <p>Buscando cep</p>
}

function App() {
  return (
    <div>
        
    </div>
  )
};





export default App;