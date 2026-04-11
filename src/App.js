import FormContato from "./FormContato"
import AgendamentoConsulta from "./Agendamentos"
import BuscaCep from "./BuscaCep"
import ListaMedicos from "./RestHTTP";


function App() {
  return (
    <div>
        <FormContato/><br></br>
        <AgendamentoConsulta/><br></br>
        <BuscaCep/><br></br>
        <ListaMedicos/>
    </div>
  )
};





export default App;