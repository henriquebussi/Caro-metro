import React from 'react'
import './Aluno.css'
import { TopbarAluno } from '../components/TopbarAluno'

function Aluno() {
  return (

    <div class="body">
      <TopbarAluno/>

      <main>

    <div className="centro">
    <div className="imageAluno">
        <img src="src\image\Max-Verstappen.png" alt="" class="maxPerfil"/>
      </div>
      <div className="info">
        <div className="container1">
           <span className="nome informacao">Nome: <br /><input type="text" name="" id="" value="Max verstappen" /></span> {/*depois tera que mudar usando banco de dados */}
            <span className="cpf informacao">CPF: <br /><input type="text" name="" id="" value="Max verstappen" /> </span>
            <span className="email informacao">Email: <br /><input type="text" name="" id="" value="email@email.com" /> </span>
            <span className="turma2 informacao">Turma: <br /><input type="text" name="" id="" value="Idev2 né vida" /></span>
            <span className="responsavel informacao">Nome do responsável: <br /><input type="text" name="" id="" value="Max verstappen-mãe" /></span>
            <span className="telefone informacao">Número: <br /><input type="text" name="" id="" value="#1 lugar" /> </span>
            <span className="ocorrencias informacao">Ocorrencias: <br /><input type="text" name="" id="" value="2" /> </span>
            <span className="comentarios informacao">Comentários: <br /><input type="text" name="" id="" value="enquanto tu ta indo eu to vortano" /> </span>
        </div>
      </div>
      </div>
      </main>
    </div>
  )
}

export default Aluno

//pagina onde veremos aluno por aluno