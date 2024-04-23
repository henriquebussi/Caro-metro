import React, { useState } from 'react';
import "./Login.css"

function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        if((username === 'henrique' && password === '123') || (username === 'juan' && password === '123')) {
            window.location.href ="/home";
        } else {
            alert("Usuário ou senha incorretos. Tente usar 'henrique' ou 'juan' no usuário e '123' na senha.");
        }
    };

    const cadastrar = () =>{
        window.location.href = "/cadastro"
    }

    return(
        <div className="flex justify-center items-center bg-gradient-to-t from-blue-200 to-slate-50 h-screen">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"></link>
            <div>
                <div className="flex maxves">
                    <img className="senaimg lg:w-80 w-80" src="src\image\logo-senai-azul2.png" alt="logo senai" /> 
                    <h1 className="from-neutral-900 text-5xl mb-8 mt-2">LOGIN</h1>
                </div>
                <div className="flex items-center justify-center flex-col mt-2">
                    <input className='username mb-16 text-xl lg:h-18 lg:mb-20 lg:text-2xl' type="text" placeholder="NOME" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className='password mb-5 text-xl lg:h-18 lg:mb-20 lg:text-2xl' type="password" placeholder="SENHA" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='mb-6 entrar' onClick={handleClick} id="entrar"> ENTRAR </button>
                    <button className="criar" onClick={cadastrar}>NÃO TENHO CONTA</button>
                </div>
            </div>
        </div>
    )
}

export default Login;

// pagina onde os professores poderão olhar logar para olhar turma por turma :)