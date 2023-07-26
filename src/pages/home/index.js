import React, { useState } from 'react';
import Slide2 from './slide2-index';
import Slide3 from './slide3-index';
import Slide4 from './slide4-index';
import Slide5 from './slide5-index';

const Home = ({ onLugaresButtonClick, onPessoasButtonClick, onSobreButtonClick, onContatoButtonClick }) => {
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
        <Slide2 onPessoasButtonClick={onPessoasButtonClick}/>
        <Slide3 onLugaresButtonClick={onLugaresButtonClick}/>
        <Slide4 onSobreButtonClick={onSobreButtonClick}/>
        <Slide5 onContatoButtonClick={onContatoButtonClick}/>
    </div>
  )
}

export default Home;
