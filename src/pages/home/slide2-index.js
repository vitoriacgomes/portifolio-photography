import React, { useState } from 'react';

const Slide2 = ({onPessoasButtonClick}) => {
  return (
    <div>
        <section class="home-container-2">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="home-title sm:text-3xl mb-4 ">PESSOAS</h1>
                    <button class="button-home pessoas flex mx-auto border p-3 px-6" onClick={onPessoasButtonClick}>View</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Slide2;
