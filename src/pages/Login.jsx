import Topbar from "../components/Topbar"
import "./Login.css"

function Login(){
    return(
        <div>
            <img src="../image/logo-senai-azul2.png" alt="logo senai" />
            <h1>Login</h1>
            <input type="text" placeholder="NOME" />
            <input type="password" placeholder="SENHA" />
            <button class ="entrar"> Entrar </button>
            <button class="criar conta">Não tenho conta</button>
        </div>
    )
}

export default Login