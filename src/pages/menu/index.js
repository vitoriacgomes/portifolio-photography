import React, { useState } from 'react';

const Menu = ({onLugaresButtonClick, onHomeButtonClick, onPessoasButtonClick, onSobreButtonClick, onContatoButtonClick}) => {
  return (
    <div className='menu'>
        <header class="menu-container text-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav class="nav md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <button class="mr-5 hover:text-900" onClick={onHomeButtonClick}>Home</button>
                    <button class="mr-5 hover:text-900" onClick={onPessoasButtonClick}>Pessoas</button>
                    <button class="mr-5 hover:text-900" onClick={onLugaresButtonClick}>Lugares</button>
                    <button class="mr-5 hover:text-900" onClick={onSobreButtonClick}>Sobre</button>
                    <button class="mr-5 hover:text-900" onClick={onContatoButtonClick}>Contato</button>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Menu;
