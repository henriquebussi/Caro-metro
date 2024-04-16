import React from 'react';
import "./Login.css"

function Login(){

    return(
        <div class="container">
            <img src="../image/logo-senai-azul2.png" alt="logo senai" />
            <h1>Login</h1>
            <input type="text" placeholder="NOME" id="nome"/>
            <input type="password" placeholder="SENHA" id="senha"/>
            <button class ="entrar" id="entrar"> <a href="/home">Entrar</a> </button>
            <button class="criar">Não tenho conta</button>
        </div>
    )
}

export default Login