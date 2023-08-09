import React, { useEffect } from 'react';
import p1 from '../../../img/pessoas/pessoas-1.jpg'
import p2 from '../../../img/pessoas/pessoas-2.jpg'
import p3 from '../../../img/pessoas/pessoas-3.jpg'
import p4 from '../../../img/pessoas/pessoas-4.jpg'
import p6 from '../../../img/pessoas/pessoas-6.jpg'

const Pessoas = () => {
  return (
    <div className='pessoas'>
      <section class="pessoas-dv">
        <div class="containe-pe px-20 py-20 mx-auto  flex flex-wrap">
          <div class="flex flex-col flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="title-pes sm:text-2x1 text-3x1 ">PESSOAS</h1>
            </div>

          </div>
        </div>
        <div class="container-pe-2 py-5 mx-auto flex flex-wrap">
          <div class="flex flex-col flex-wrap lg:w-1/5 lg:pl-20 lg:text-left text-center">
            <div class="flex flex-col mb-20 lg:items-start items-center">
              <div class="flex-grow">
                <p class="pe-p-1 leading-relaxed text-justify">Eu imagino o sentimento 
                de Leonardo da Vinci quando terminou Monalisa, pois é assim que me vejo 
                a cada foto tirada e editada. </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container-pe mx-auto flex flex-wrap justify-end">
          <div class="xl:w-1/4 md:w-1/2 p-20 w-full rounded-lg">
            <img alt="feature" class=" img-pes-1 object-cover object-center h-full w-full" src={p1}/>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-5 w-full rounded-lg">
            <img alt="feature" class="img-pes-2 object-cover object-center h-full w-full" src={p4}/>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-5 w-full rounded-lg">
            <img alt="feature" class="img-pes-3 object-cover object-center h-full w-full" src={p3}/>
            <p className='p-pe-2 leading-relaxed text-justify py-10 px-20 mx-auto flex lg:pl-0 '>
            Conseguir captar cada olhar, história e essência, torna o ângulo perfeito 
            apenas ilustrativo, quando a felicidade se faz presente em todo o contexto. 
            Tirar foto de cada ser humano, é uma vivência única, porque cada qual é 
            assim a sua trajetória. Saibam, fotografá-los é levá-los  comigo eternizados em png. </p>
          </div>
        </div>
        <div class="container-pe mx-auto flex flex-wrap justify-end">
          <div class="xl:w-1/4 md:w-1/2 p-20 w-full rounded-lg">
            <img alt="feature" class=" img-pes-4 object-cover object-center h-full w-full" src={p6}/>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-5 w-full rounded-lg">
            <img alt="feature" class="img-pes-5 object-cover object-center h-full w-full" src={p2}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pessoas;
