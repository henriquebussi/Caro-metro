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

  return (
    
    <div>
      <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />

      <div className='bg-gradient-to-b from-white to-green-200 h-screen'>
        <br />
        <img className="ml-4" src="src\image\seta-esquerda.png" alt="arrow" onClick={VoltarTurma} />
        <div className='flex flex-col items-center'>
          <div className='justify-center'>
            <h1 className="text-black text-5xl mb-12">CADASTRO</h1> <br />
          </div>
          <div className='flex justify-around'>
            <div className='ml-10' id="rightside">
              <input className="mb-10 h-11 w-[700px]" type="text" placeholder='NOME' />
              <input className="mb-10 h-11 w-[700px]" type="text" placeholder='CPF' />
              <input className="mb-10 h-11 w-[700px]" type="text" placeholder='EMAIL' />
              <div className="mb-10 h-11 w-[700px]" >
                
              </div>
              <div className=' flex items-center flex-col'>
                <input type="file" id='inpimg' className=' h-8 w-80' accept="image/png, image/gif, image/jpeg" onChange={ImgChange} />
                {imgtoinp && <img src={imgtoinp} alt="preview" className=' w-32' />}
              </div>
              <img src="src\image\logo-senai-azul2.png" className="justify-start self-end w-40" alt="" />
            </div>
            <div className='' id="leftside">
              <input className=" mb-10 h-11 w-[700px]" type="text" placeholder='NOME DO RESPONSAVEL' />
              <input className=" mb-10 h-11 w-[700px]" type="text" placeholder='TELEFONE' />
              <textarea name="" id="" cols="105" rows="10" className=' justify-center w-[700px]' placeholder='COMETARIOS ADICIONAIS'></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro_aluno;
