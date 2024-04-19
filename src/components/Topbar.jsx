import React, { useState, useEffect } from 'react';
import './Topbar.css';

function Topbar() {
    const [dropdownVisivel, setDropdownVisivel] = useState(false);

    function toggleDropdown() {
        setDropdownVisivel(!dropdownVisivel); // junto
    }

    function handleClickOutside(event) {
        if (!event.target.matches('.dropdown button')) {
            setDropdownVisivel(false);
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-purple-500 text-white navbar">
            <div className="dropdown">
                <button onClick={toggleDropdown}>LISTA DE ALUNOS DO DESENVOLVIMENTO</button>
                <div className={`alter ${dropdownVisivel ? 'show' : ''}`}>
                    <a href="">IDEV1</a>
                    <a href="">IDEV2</a>
                    <a href="">IDEV3</a>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
