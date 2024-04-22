import Topbar from "../components/Topbar"
import './Homepage.css'

function Homepage(){

    function PaginaAluno(){
        window.location.href = "/aluno"
    }

    return(
        <>
        <Topbar class="topebar"/>
        <div>
                 <main>
                    <div className="hero">

            <div className="nomes">
            <div className="max" onClick={PaginaAluno}>
            <span onClick={PaginaAluno}>MAX VERSTAPPEN</span> 
                <img src="src\image\Verstappen.jpg" alt="Max verstappen" onClick={PaginaAluno}/> 
                </div>
            
                <div className="max" onClick={PaginaAluno}>
            <span>MAX VERSTAPPEN</span> 
                <img src="src\image\Verstappen.jpg" alt="Max verstappen"/> 
                </div>
                <div className="max" onClick={PaginaAluno}>
            <span>MAX VERSTAPPEN</span> 
                <img src="src\image\Verstappen.jpg" alt="Max verstappen"/> 
                </div>
                <div className="max" onClick={PaginaAluno}>
            <span>MAX VERSTAPPEN</span> 
                <img src="src\image\Verstappen.jpg" alt="Max verstappen"/> 
                </div>

                <div className="max" onClick={PaginaAluno}>
            <span>MAX VERSTAPPEN</span> 
                <img src="src\image\Verstappen.jpg" alt="Max verstappen"/> 
                </div>
                <div className="max" >
            <span>MAX VERSTAPPEN</span> 
                <img src="src\image\Verstappen.jpg" alt="Max verstappen"/> 
                </div>
                <div className="max" onClick={PaginaAluno}>
            <span>MAX VERSTAPPEN</span> 
                <img src="src\image\Verstappen.jpg" alt="Max verstappen"/> 
                </div>
                <div className="max" onClick={PaginaAluno}>
            <span>MAX VERSTAPPEN</span> 
                <img src="src\image\Verstappen.jpg" alt="Max verstappen"/> 
                </div>
                <div className="max" onClick={PaginaAluno}>
            <span>MAX VERSTAPPEN</span> 
                <img src="src\image\Verstappen.jpg" alt="Max verstappen"/> 
                </div>
                <div className="max" onClick={PaginaAluno}>
            <span>MAX VERSTAPPEN</span> 
                <img src="src\image\Verstappen.jpg" alt="Max verstappen"/> 
                </div>
                <div className="max" onClick={PaginaAluno}>
            <span>MAX VERSTAPPEN</span> 
                <img src="src\image\Verstappen.jpg" alt="Max verstappen"/> 
                </div>
                <div className="max" onClick={PaginaAluno}>
            <span>MAX VERSTAPPEN</span> 
                <img src="src\image\Verstappen.jpg" alt="Max verstappen"/> 
                </div>
                
                

            </div>
            
                    </div>
                    

                </main>


        </div>
        </>
    )
}

export default Homepage

// pagina onde poderemos ver aluno por aluno