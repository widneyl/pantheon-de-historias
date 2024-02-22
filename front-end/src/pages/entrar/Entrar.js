import { useState } from "react";
import Header from "../../componentes/header/Header"


import './Entrar.css'
import axios from "axios";

function Entrar(){


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function enviar(e){
        e.preventDefault()
        
        const dados = {
            "nome": nome,
            "email": email,
            "senha": senha
        }

        axios.post("http://localhost:8080/cadastrar", dados)
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })

    }

    return(
        <>
        <Header/>
            <div className="cadastro">  
                <form>
                    <h2>Cadastro</h2>
                    <input autoComplete="off" name="nome" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                    <input autoComplete="off" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input autoComplete="off" type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                    <button onClick={enviar}>Entrar</button>
                </form>
            </div>
        </>
    
    )
}

export default Entrar;