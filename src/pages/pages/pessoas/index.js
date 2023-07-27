import React, { useEffect } from 'react';
import p1 from '../../../img/pessoas/pessoas-1.jpg'
import p2 from '../../../img/pessoas/pessoas-2.jpg'
import p3 from '../../../img/pessoas/pessoas-3.jpg'

const Pessoas = () => {
  return (
    <div className='pessoas'>
      <section class="pessoas-dv">
        <div class="containe-pe px-20 py-20 mx-auto  flex flex-wrap">
          <div class="flex flex-col flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="title-pes sm:text-3xl text-2xl ">PESSOAS</h1>
            </div>
          </div>
        </div>
        <div class="container-pe-2 py-10 mx-auto flex flex-wrap">
          <div class="flex flex-col flex-wrap lg:w-1/5 lg:pl-20 lg:text-left text-center">
            <div class="flex flex-col mb-20 lg:items-start items-center mt-10">
              <div class="flex-grow">
                <p class="p leading-relaxed text-justify">A cada fotografia tenho a oportunidade 
                de capturar a singularidade de cada um. Todos somos como um poema 
                que deve ser traduzido em uma imagem. </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container-pe mx-auto flex flex-wrap justify-end">
          <div class="xl:w-1/4 md:w-1/2 p-5 w-full rounded-lg overflow-hidden">
            <img alt="feature" class=" img-pes object-cover object-center h-full w-full" src={p1}/>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-5 w-full rounded-lg overflow-hidden">
            <img alt="feature" class="img-pes object-cover object-center h-full w-full" src={p2}/>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-5 w-full rounded-lg overflow-hidden">
            <img alt="feature" class="img-pes object-cover object-center h-full w-full" src={p3}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pessoas;
