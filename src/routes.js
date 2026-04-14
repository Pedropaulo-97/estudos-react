import { BrowserRouter, Routes, Router, Route } from "react-router-dom";

import Home from './pages/Home';
import ListaMedicos from './pages/ListaMedicos';
import FormContato from './pages/FormContato';
import Agendamentos from './pages/Agendamentos';
import BuscaCep from "./components/BuscaCep";
import Header from "./components/Header";


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agendamentos" element={<Agendamentos />} />
                <Route path="/buscarcep" element={<BuscaCep />} />
                <Route path="/formcontato" element={<FormContato />} />
                <Route path="/listamedicos" element={<ListaMedicos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;