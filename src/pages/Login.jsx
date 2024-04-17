import React from 'react';
import "./Login.css"

function Login(){

    const text = document.getElementById('text')
    const password = document.getElementById('password')

    const handleClick = () => {
        if(text.value === 'admin'  && password.value === "admin123"){
            window.location.replace("/home");
        } else {
            window.alert("usuário ou senha incorretos")
            window.alert("tente usar admin no username e admin123 em passowrd")
        }

    };

    return(
        <div class="container" className=" flex justify-center items-center bg-gradient-to-t from-blue-200 to-slate-50 h-screen">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"></link>
            <div>
                <div className=" flex maxves">
                    <img className=""src="src\image\logo-senai-azul2.png" alt="logo senai" width={500}/> <br />
                    <h1 className=" from-neutral-900 text-5xl mb-8" >LOGIN</h1>
                </div>
                <div className=" flex items-center justify-center flex-col mt-3">
                    <input className=' mb-20 text-2xl' type="text" placeholder="NOME"  id='text'/>
                    <input className=' mb-20 text-2xl'type="password" placeholder="SENHA" id='password' />
                    <button className=' mb-14 entrar' onClick={handleClick} id="entrar" > ENTRAR </button>
                    <button class="criar">NÃO TENHO CONTA</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
