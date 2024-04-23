import React from 'react'
import './TopbarAluno.css'

export const TopbarAluno = () => {

    function VoltarTurma() {
        window.location.href = "/home"
    }

  return (
    <>
        <div class="navbar">
            <div className="container">
                <img src="src\image\seta-esquerda.png" alt="arrow" onClick={VoltarTurma}/>
                <span>MAX VERSTAPPEN</span>
                <span class="displayNone"></span> {/*é só pra ficar certo a navbar isso é inutil */}
            </div>
        </div>
    </>
  )
}
