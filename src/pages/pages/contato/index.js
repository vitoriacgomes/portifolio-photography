import React from 'react'

const Contato = () => {
  return (
    <div className='contato'>
      <section class="contato-dv">
        <div class="container py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="title-cont sm:text-3xl text-2xl mb-6">Entre em Contato</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Para falar comigo basta mandar um e-mail ou entrar no meu instagram!</p>
          </div>
          <div class="">
            <div class="">
              <div className='tree'>
                <div className='links-container'>
                  <a className='a' href="" rel="noreferrer noopener" target="_blank">Veja meu portfólio</a>
                  <a className='a' href="https://www.linkedin.com/in/daniel-vilela-231b80251/" rel="noreferrer noopener" target="_blank">meu Linkedin</a>
                  <a className='a' href="https://www.instagram.com/dnvilela" rel="noreferrer noopener"
                    target="_blank">Instagram</a>
                  <a className='a' href="https://github.com/vitoriacgomes/portifolio-photography" rel="noreferrer noopener" target="_blank">Código do Projeto</a>
                </div>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a class="">daniel.vilelasantos@gmail.com</a> <br/> <br/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato;
