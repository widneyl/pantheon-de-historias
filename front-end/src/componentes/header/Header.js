import { Link } from 'react-router-dom';

import Logo from '../../img/logo.jpeg'
import './Header.css'

function Header() {
    return (
        <div>
            <header className='cabecalho'>
                <Link className='logo' to="/"><img src={Logo} alt="Logo" /></Link>

                <nav className='links'>
                    <Link to="/"><span>Inicio</span></Link>
                    <Link to="/Contato"><span>Contato</span></Link>
                    <Link to="/Sobre"><span>Sobre</span></Link>
                    <Link to="/Entrar"><span>Entrar</span></Link>

                </nav>


            </header>
            <div className='bloco_inferior'></div>
        </div>

    )
}
export default Header;