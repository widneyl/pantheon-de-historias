import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';

//Links de navegação
import Inicio from "./pages/Inicio/Inicio.js";
import Contato from "./pages/contato/Contato";
import Sobre from "./pages/Sobre"
import Entrar from "./pages/entrar/Entrar"

//Footer
import Footer from "./componentes/Footer/Footer.js";

//Historias
import Roma from "./pages/historias/sur-roma/Roma.js";
import Atenas from "./pages/historias/atenas/Atenas.js";


function App() {
  return (
    <div  className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Contato" element={<Contato/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
        <Route path="/Entrar" element={<Entrar/>}/>
        <Route path="/surgimento-de-roma" element={<Roma/>}/>
        <Route path="/Atenas" element={<Atenas/>}/>
      </Routes>
      <Footer/>
    </Router>


    </div>

  );
}

export default App;
