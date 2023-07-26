import React from 'react';
import Pessoas from './pessoas-index';
import Lugares from './lugares-index';
import Sobre from './sobre-index';
import Contato from './contato-index';

const Home = () => {
  return (
    <div>
        <section class="home-container">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="home-title sm:text-3xl mb-4 ">DANIEL VILELA</h1>
                    <p class="home-desc lg:w-2/3 mx-auto leading-relaxed">photography</p>
                </div>
            </div>
        </section>
        <Pessoas/>
        <Lugares/>
        <Sobre/>
        <Contato/>
    </div>
  )
}

export default Home;
