import './Footer.css'
import { FaGithub } from "react-icons/fa";


function Footer() {
    return (
        <div className='Footer'>
            <div>
                <a href='https://github.com/widneyl' target="_blank" rel="noreferrer">widney_l <FaGithub className='Github'/></a>
               
            </div>
        </div>
    )
}
export default Footer;