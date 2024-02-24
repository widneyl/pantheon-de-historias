import { useState } from "react";
import Header from "../../componentes/header/Header"


import './Entrar.css'
import axios from "axios";

function Entrar(){


    const [nomeUser, setNome] = useState('');
    const [emailUser, setEmail] = useState('');
    const [senhaUser, setSenha] = useState('');

    function enviar(e){
        e.preventDefault()
        
        const dados = {
            nome: nomeUser,
            email: emailUser,
            senha: senhaUser
        };
        

        axios.post("http://localhost:8080/cadastrar", dados)
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log('deu erro')
        })

    }

    return(
        <>
        <Header/>
            <div className="cadastro">  
                <form>
                    <h2>Cadastro</h2>
                    <input autoComplete="off" name="nome" type="text" placeholder="Nome" value={nomeUser} onChange={(e) => setNome(e.target.value)}></input>
                    <input autoComplete="off" type="text" placeholder="Email" value={emailUser} onChange={(e) => setEmail(e.target.value)}></input>
                    <input autoComplete="off" type="password" placeholder="Senha" value={senhaUser} onChange={(e) => setSenha(e.target.value)}></input>
                    <button onClick={enviar}>Entrar</button>
                </form>
            </div>
        </>
    
    )
}

export default Entrar;