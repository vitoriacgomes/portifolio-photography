import React from 'react';
import Home2 from './2-index';

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
        <Home2/>
    </div>
  )
}

export default Home;
