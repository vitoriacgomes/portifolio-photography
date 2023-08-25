import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importando os estilos do carrossel
import p1 from '../../../img/pessoas/pessoas-1.jpg'
import p2 from '../../../img/pessoas/pessoas-2.jpg'
import p3 from '../../../img/pessoas/pessoas-3.jpg'
import p4 from '../../../img/pessoas/pessoas-4.jpg'
import p6 from '../../../img/pessoas/pessoas-6.jpg'

const Pessoas = () => {
  const images = [
     p1,p2,p3,p4,p6
  ];
  return (
    <div className='pessoas'>
      <section class="pessoas-dv">
        <div class="containe-pe px-20 py-10 mx-auto  flex flex-wrap">
          <div class="flex flex-col flex-wrap w-full mb-20">
            <div class="lg:w-1/4 w-full mb-5 lg:mb-0">
              <h1 class="title-pes sm:text-2x1 text-3x1 ">PESSOAS</h1>
            </div>

          </div>
        </div>
        <div class="container-pe-2 mx-auto flex flex-wrap">
          <div class="flex flex-col flex-wrap lg:w-1/2 lg:pl-20 lg:text-left text-center">
            <div class="flex flex-col mb-0 lg:items-start items-center">
              <div class="flex-grow">
                <p class="pe-p-1 leading-relaxed text-justify">Eu imagino o sentimento 
                de Leonardo da Vinci quando terminou Monalisa, pois é assim que me vejo 
                a cada foto tirada e editada. Conseguir captar cada olhar, história e essência, torna o ângulo perfeito 
                apenas ilustrativo, quando a felicidade se faz presente em todo o contexto. 
                Tirar foto de cada ser humano, é uma vivência única, porque cada qual é 
                assim a sua trajetória. Saibam, fotografá-los é levá-los  comigo eternizados em png. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-container">
        <Carousel>
          {images.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Imagem ${index}`} />
            </div>
          ))}
        </Carousel>
        </div>
      </section>
    </div>
  )
}

export default Pessoas;
