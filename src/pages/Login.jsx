import Topbar from "../components/Topbar"
import "./Login.css"

function Login(){
    return(
        <div class="container" className=" bg-gradient-to-t from-blue-400 to-slate-50">
            <div className=" flex justify-between">
                <h1>Login</h1>
                <img src="../image/logo-senai-azul2.png" alt="logo senai" />
            </div>

            <input type="text" placeholder="NOME" />
            <input type="password" placeholder="SENHA" />
            <button class ="entrar"> Entrar </button>
            <button class="criar">Não tenho conta</button>
        </div>
    )
}

export default Login