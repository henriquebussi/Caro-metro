import React, { useState, useEffect } from 'react';
import './Topbar.css';

function Topbar() {
    const [dropdownVisivel, setDropdownVisivel] = useState(false);
    const [botaoTexto, setBotaoTexto] = useState("LISTA DE ALUNOS DO DESENVOLVIMENTO");

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
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
        <div className=" text-black navbar">
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
            sla oq <br />
            sla oq <br />
            sla oq <br />


        </div>
        </>
    );
}

export default Topbar;
