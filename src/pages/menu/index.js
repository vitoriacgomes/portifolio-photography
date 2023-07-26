import React from 'react'

const Menu = () => {
  return (
    <div>
        <header class="menu-container text-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav class="nav md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-900">Home</a>
                    <a class="mr-5 hover:text-900">Pessoas</a>
                    <a class="mr-5 hover:text-900">Lugares</a>
                    <a class="mr-5 hover:text-900">Sobre</a>
                    <a class="mr-5 hover:text-900">Contato</a>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Menu;
