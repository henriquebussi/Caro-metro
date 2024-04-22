import React from 'react'
import './Aluno.css'
import { TopbarAluno } from '../components/TopbarAluno'

function Aluno() {
  return (

    <div>
      <TopbarAluno/>

      <main>
    <div className="centro">
      <div className="imageAluno">
        <img src="src\image\Max-Verstappen.png" alt="" class="maxPerfil"/>
      </div>
      <div className="info">
        <div className="container1">
           <span className="nome informacao">Nome: Max Verstappen</span> {/*depois tera que mudar usando banco de dados */}
            <span className="cpf informacao">CPF: 453.178.287-91</span>
            <span className="email informacao">Email: Maxverstappin@Verstappen.com</span>
            <span className="turma2 informacao">Turma: IDEV2 né vida</span>
            <span className="responsavel informacao">Nome do responsável: Sophie-Marie Kumpen</span>
            <span className="telefone informacao">Número: #1 lugar </span>
            <span className="comentarios informacao">Comentários:enquanto tu ta indo ele ta vortano </span>
        </div>
      </div>
      </div>
      </main>
    </div>
  )
}

export default Aluno

//pagina onde veremos aluno por aluno