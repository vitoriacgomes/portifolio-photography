import React from 'react'
import fotominha from "../../../img/daniel-3-sobre.jpg"

const Sobre = () => {
  return (
    <div className='sobre'>
        <section class="sobre-dv">
            <div class="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                    <h1 class="title-sobre sm:text-4xl text-3xl mb-8">Daniel Vilela</h1>
                    <div className='desc-sobre'>
                        <p class="mb-5 leading-relaxed">Olá, Meu nome é Daniel Vilela </p>
                        <p class="mb-4 leading-relaxed">Eu sou um novo e um criativo fotografo aqui em Recife. Estou me formando em Analise e Desenvolvimento de Sistemas, e a fotografia para
                        mim é a minha arte, a forma como me expresso.</p>
                        <p class="mb-8 leading-relaxed">De coração aberto convido todos a dar uma olhadinha no meu trabalho. </p>
                    </div>
                </div>
                <div class="lg:w-1/3  md:w-1/2">
                    <img class="lg:px-4 img-sobre object-cover object-center rounded" alt="hero" src={fotominha}/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Sobre;
