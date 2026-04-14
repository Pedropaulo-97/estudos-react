import { useEffect, useState } from "react"

function ListaMedicos() {
    const [medicos, setMedicos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (!res.ok) throw new Error('Erro ao buscar medico')
                return res.json()
            })
            .then(data => {
                setMedicos(data)
                setCarregando(false)
            })
            .catch(err => {
                setErro(err.message)
                setCarregando(false)
            })
    }, [])

    if (carregando) return <p>Carregando medicos</p>
    if (erro) return <p>Erro: {erro}</p>

    return (
        <ul>
            {medicos.map(medico => (
                <li key={medico.id}>
                    <p><strong>Nome:</strong> {medico.name}</p>
                    <p><strong>E-mail:</strong> {medico.email}</p>
                </li>
            ))}
        </ul>
    )
}

export default ListaMedicos