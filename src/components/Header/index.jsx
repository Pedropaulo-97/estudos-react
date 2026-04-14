import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <header>
            <h2 className="logo-header">Clinic SaaS</h2>

            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/agendamentos">Agendamentos</Link>
                <Link to="/buscarcep">BuscarCEP</Link>
                <Link to="/formcontato">Contatos</Link>
                <Link to="/listamedicos">Medicos</Link>
            </div>
        </header>
    )
}


export default Header;