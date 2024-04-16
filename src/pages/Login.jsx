import Topbar from "../components/Topbar"
import "./Login.css"

function Login(){
    return(
        <div class="container" className=" bg-gradient-to-t from-blue-400 to-slate-50 h-screen items-center">
            <div className=" flex justify-center">
                <img className=""src="../image/logo-senai-azul2.png" alt="logo senai" />
                <h1 className=" from-neutral-900 text-4xl">LOGIN</h1>
            </div>
            <div className=" flex items-center justify-center flex-col">
                <input  type="text" placeholder="NOME" />
                <input type="password" placeholder="SENHA" />
                <button class ="entrar"> Entrar </button>
                <button class="criar">Não tenho conta</button>
            </div>
        </div>
    )
}

export default Login