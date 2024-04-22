import React, { useState, useEffect } from 'react';
import './Topbar.css';

function Topbar() {
    const [dropdownVisivel, setDropdownVisivel] = useState(false);
    const [botaoTexto, setBotaoTexto] = useState("LISTA DE ALUNOS DO IDEV2");
    const [turma, setTurma] = useState("IDEV2")
    const [curso, setCurso] = useState("desenvolvimento de sistemas")


    function Cadastrar() {
        window.location.href = "/cadastro-aluno"
    }
    function voltar() {
        window.location.href = "/"
    }

    function toggleDropdown() {
        setDropdownVisivel(!dropdownVisivel);
    }

    function handleClickOutside(event) {
        if (!event.target.matches('.dropdown button')) {
            setDropdownVisivel(false);
        }
    }

    function handleItemClick(nomeCurso) {
        setBotaoTexto(`LISTA DE ALUNOS DO ${nomeCurso}`);
        setDropdownVisivel(false);
        setTurma(nomeCurso)
        if (nomeCurso != "IDEV1" && nomeCurso != "IDEV2" && nomeCurso != "IDEV3"){
            setCurso("ELETRO-ELETRONICA/MECÂNICA")
        } else{
            setCurso("DESENVOLVIMENTO DE SISTEMAS")
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
        <div className=" text-black navbar1">
            <div className="dropdown">
                <button onClick={toggleDropdown}>{botaoTexto}</button>
                <div className={`alter ${dropdownVisivel ? 'show' : ''}`}>
                    <a onClick={() => handleItemClick("IDEV1")}>IDEV1</a>
                    <a onClick={() => handleItemClick("IDEV2")}>IDEV2</a>
                    <a onClick={() => handleItemClick("IDEV3")}>IDEV3</a>
                    <a onClick={() => handleItemClick("ILE-MEC1")}>ILE-MEC1</a>
                    <a onClick={() => handleItemClick("ILE-MEC2")}>ILE-MEC2</a>
                    <a onClick={() => handleItemClick("ILE-MEC3")}>ILE-MEC3</a>
                </div>

            </div>
        </div>

        <div className="sidebar">
           <div><div className="turma">{turma}</div>
        <div className="curso">CURSO:
        <div className="qualCurso">{curso}</div>
        </div>
        </div> 
        <div>
        
        <button class="button" onClick={Cadastrar}>Cadastre</button>
        <div className="atualizacao">Lista atualizada em: <br /> 21/04/2024</div>
        <img src="src\image\logo-senai-azul2.png" alt="Logo senai" onClick={voltar} class="logoSenai"/>
        </div>
        </div>

        
        </>
    );
}

export default Topbar;
