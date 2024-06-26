// PS: NÃO FAZ SENTIDO TER CADASTRO
import React, { useState } from 'react';
import "./Cadastro.css"



function Cadastro(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [cpf, setCPF] = useState('');

    const handleClick = () => {
        if(username != '' && password != '' && email != '' && confirmar != '' && cpf != '') {
            if(password == confirmar){
                window.location.href ="/";
            }else{
                alert("Senha e confirmar senha estão diferentes")
            }
        } else {
            alert("preencha todos os campos");
        }
    };

    const cadastrar = () =>{
        window.location.href = "/"
    }

    return(
        <div className="flex justify-center items-center bg-gradient-to-t from-red-400 to-slate-50 h-screen">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"></link>
            <div>
                <div className="flex maxves">
                    <img className="senaimg lg:w-80 w-80" src="src\image\logo-senai-azul2.png" alt="logo senai" /> 
                    <h1 className="from-neutral-900 text-5xl mb-4">CADASTRO</h1>
                </div>
                <div className="flex items-center justify-center flex-col mt-3">
                    <input className='username mb-4 text-xl h-14 lg:h-14 lg:mb-4 lg:text-2xl' type="text" placeholder="NOME" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className='username mb-4 text-xl h-14 lg:h-14 lg:mb-4 lg:text-2xl' type="text" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className='username mb-4 text-xl h-14 lg:h-14 lg:mb-4 lg:text-2xl' type="number" placeholder="CPF" value={cpf} onChange={(e) => setCPF(e.target.value)}/>
                    <input className='password mb-4 text-xl h-14 lg:h-14 lg:mb-4 lg:text-2xl' type="password" placeholder="SENHA" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className='username mb-4 text-xl h-14 lg:h-14 lg:mb-4 lg:text-2xl' type="password" placeholder="CONFIRME A SENHA" value={confirmar} onChange={(e) => setConfirmar(e.target.value)}/>
                    <button className='mb-3 entrar' onClick={handleClick} id="entrar"> ENTRAR </button>
                    <button className="criar" onClick={cadastrar}>Já tenho uma conta</button>
                </div>
            </div>
        </div>    
        )
}

export default Cadastro

// pagina onde cadastraremos os professores