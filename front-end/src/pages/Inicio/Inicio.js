import { Link } from "react-router-dom"
import Header from "../../componentes/header/Header"
import Cartaz1 from '../../img/CartazAlexandre.png'
import Cartaz2 from '../../img/CartazSurgimentoDeRoma.png'
import Cartaz3 from '../../img/CartazAtenas.png'

import './Inicio.css'
function Inicio() {
    return (
        <div className="Inicio">
            <Header />
            <div className="bloco_cartazes">
                <Link><img src={Cartaz1} alt="Alexandre o Grande" /></Link>
                <Link to="/surgimento-de-roma"><img src={Cartaz2} alt="O surgimento de roma"/></Link>
                <Link to="/Atenas"><img src={Cartaz3} alt="Atenas"/></Link>
            </div>
        </div>
    )
}

export default Inicio;