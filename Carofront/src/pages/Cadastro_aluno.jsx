import React, { useState } from 'react';
import './Cadastro_aluno.css';

function Cadastro_aluno() {
  const [imgtoinp, setImgtoinp] = useState('');
  const [inptoimg, setInptoimg] = useState('');
   //declarar as variaveis

  function VoltarTurma() {
    window.location.href = "/home";
  } // função pro "voltar"

  const ImgChange = (evt) => {
    const file = evt.target.files[0];
    if (file) {
      setImgtoinp(URL.createObjectURL(file));
    }
  };

  function cadastro(){
    window.location.href = "/home"
  }

  return (
    
    <div>
      <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />

      <div className='bg-gradient-to-b from-white to-green-200 h-screen'>
        <br />
        <img className="ml-4 seta"  src="src\image\seta-esquerda.png" alt="arrow" onClick={VoltarTurma} />
        <div className='flex flex-col'>
          <div className='justify-center'>
            <h1 className="text-black text-5xl mb-12 text-center">CADASTRO</h1> <br />
          </div>
          <div className='flex justify-around'>
            <div className=' flex flex-col' id="leftside">
              <input className="mb-10 h-11 input " type="text" placeholder='NOME' />
              <input className="mb-10 h-11 input" type="text" placeholder='CPF' />
              <input className="mb-10 h-11 input" type="text" placeholder='EMAIL' />
              <div className="mb-10 h-11 input" >
                
              </div>
              <div className=' flex items-center flex-col'>
                <label htmlFor="inpimg" id='labelimg' className=' mb-3'>IMPORTE A FOTO</label>
                <input type="file" id='inpimg' className=' h-8 w-80' accept="image/png, image/gif, image/jpeg" onChange={ImgChange} />
                {imgtoinp && <img src={imgtoinp} alt="preview" className=' w-32' />}
              </div>
            </div>
            <div className=' flex flex-col' id="rightside">
              <input className=" mb-10 h-11 input" type="text" placeholder='NOME DO RESPONSAVEL' />
              <input className=" mb-10 h-11 input" type="text" placeholder='TELEFONE' />
              <textarea name="" id="" cols="105" rows="10" className=' justify-center input' placeholder='COMETARIOS ADICIONAIS' class="textarea"></textarea> <br />
              <div className=' flex justify-center'>
              <button className=' cadastro' onClick={cadastro}>CADASTRE</button>
              </div>
        </div>
        </div>
          </div>
          <img src="src\image\logo-senai-azul2.png" className=" justify-end flex-col self-start w-40 ml-9 " alt="" />

      </div>
    </div>
  );
}

export default Cadastro_aluno;
