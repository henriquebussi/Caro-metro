import Topbar from "../components/Topbar"
import './Homepage.css'

function Homepage(){
    return(
        <div>
            <nav>
            <Topbar/>
            </nav>
                 <main>
                    <div className="hero">
            <div class="sigla">SIGLA: IDEV2</div>
            <div class="lista">Lista Atualizada em 16/04/2024</div>
                    </div>

                </main>


        </div>
    )
}

export default Homepage