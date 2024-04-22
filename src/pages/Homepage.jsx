import Topbar from "../components/Topbar"
import './Homepage.css'

function Homepage(){

    function PaginaAluno(){
        window.location.href = "/aluno"
    }

    return(
        <>
        <Topbar/>
        <div>
                 <main>
                    <div className="hero">

            <div className="nomes">
            
            
                
                

            </div>
            
                    </div>
                    

                </main>


        </div>
        </>
    )
}

export default Homepage

// pagina onde poderemos ver aluno por aluno