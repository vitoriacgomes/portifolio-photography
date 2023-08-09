import React from 'react'
import fotominha from "../../../img/daniel-3-sobre.jpg"
import d1 from '../../../img/sobre/daniel-1.jpg'
import d2 from '../../../img/sobre/daniel-3.jpg'
import d3 from '../../../img/sobre/daniel-6.jpg'
import d4 from '../../../img/sobre/daniel-7.jpg'
import d5 from '../../../img/sobre/daniel-8.jpg'
import d6 from '../../../img/sobre/aniel-9.jpg'

const Sobre = () => {
  return (
    <div className='sobre'>
        <section class="sobre-dv">
            <div class="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                    <h1 class="title-sobre sm:text-4xl text-3xl mb-8">Daniel Vilela</h1>
                    <div className='desc-sobre'>
                        <p class="mb-5 leading-relaxed"> Sou um amador. 
                        E acredite ou não, existe uma beleza nisso. Ser amador 
                        é ter a liberdade de criar sem precisar ser cobrado, é ser 
                        livre para transparecer sua alma, sem ser colocado em um 
                        lugar que não lhe cabe. Ser amador é viver a vida, entregando
                        o que você sabe fazer de melhor: seu coração em tudo. </p>
                        <p class="mb-4 leading-relaxed">Prazer, meu nome é Daniel 
                        Vilela. Sou católico, estudante de engenharia ambiental e 
                        análise e desenvolvimento de sistemas. Amante das artes e 
                        focado em entregar poesia por onde passo. Espero que goste 
                        do pouco que eu faço aqui. Aproveite! Você foi convidado a 
                        conhecer meu universo particular, sinta-se a vontade. </p>
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
