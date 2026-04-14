import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import ListaMedicos from './pages/ListaMedicos';
import FormContato from './pages/FormContato';
import Agendamentos from './pages/Agendamentos';
import BuscaCep from "./components/BuscaCep";
import Header from "./components/Header";
import Erro from './pages/Erro';
import Produto from './pages/Produto';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agendamentos" element={<Agendamentos />} />
                <Route path="/buscarcep" element={<BuscaCep />} />
                <Route path="/formcontato" element={<FormContato />} />
                <Route path="/listamedicos" element={<ListaMedicos />} />
                <Route path="/produto/:id" element={<Produto />} />

                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;