import React, { useEffect } from 'react';
import l1 from "../../../img/lugares/lugares-recife-9.jpg"
import l2 from "../../../img/lugares/lugares-recife-3.jpg"
import l3 from "../../../img/lugares/lugares-recife-1.jpg"
import l4 from "../../../img/lugares/lugares-recife-6.jpg"
import l5 from "../../../img/lugares/lugares-recife-7.jpg"
import l6 from "../../../img/lugares/lugares-recife-8.jpg"
import l7 from "../../../img/lugares/lugares-recife-12.jpg"
import l8 from "../../../img/lugares/lugares-recife-10.jpg"

const Lugares = () => {
  return (
    <div className='lugares'>
      <section class="lugares-dv">
        <div class="container-lg px-20 py-10 mx-auto flex flex-wrap">
          <div class="lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" class="img-lg-1 object-cover object-center h-full w-full" src={l3}/>
          </div>
          <div class="flex flex-col flex-wrap lg:py-0 lg:w-1/3 lg:pl-10 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="title-lug">RECIFE</h2>
                <p class="p leading-relaxed">
                Recife tem sido meu lar desde quando me entendo por gente. 
                Embora não tenha sido gerado aqui, foi esta cidade “que me trouxe 
                pelo braço”, e com seus “encantos mil”, me fez permanecer. 
                Sim, Recife me inspira. E não, não sou eu tiro suas fotos, é ela quem 
                se faz querer aparecer em minhas lentes na sua melhor forma. 
                Garanto que não seria quem sou, se morasse em um território diferente.
                 Como morar em Recie e são transmitir arte? Para mim, ela se apresenta
                como a Barbie para o Ken, a Mary Jane para o Peter Parker, a Audrey 
                Hepburn para o cinema e a Lady Diana para a história. Lhes garanto, 
                facilmente ela poderia ser a 8 maravilha do mundo, se todos a vissem 
                da forma que ela me transparece. </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" class="img-lg-2 object-cover object-center h-full w-full" src={l2}/>
          </div>
        </div>
        <section class="fotos-lg">
          <div class="container px-20 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap">
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-1/2">
                  <img alt="gallery" class="w-full object-cover h-full object-center block" src={l1}/>
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img alt="gallery" class="w-full object-cover h-full object-center block" src={l4}/>
                </div>
                <div class="md:p-2 p-1 w-full">
                  <img alt="gallery" class="w-full h-full object-cover object-center block" src={l5}/>
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-1 p-1 w-full">
                  <img alt="gallery" class="w-full h-full object-cover object-center block" src={l6}/>
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img alt="gallery" class="w-full object-cover h-full object-center block" src={l8}/>
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img alt="gallery" class="w-full object-cover h-full object-center block" src={l7}/>
                </div>
              </div>
            </div>
          </div>
        </section>


      </section>
    </div>
  )
}

export default Lugares;
