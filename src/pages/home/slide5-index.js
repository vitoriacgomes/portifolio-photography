import React from 'react'

const Slide5 = ({onContatoButtonClick}) => {
  return (
    <div>
        <section class="home-container-contato">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="home-title sm:text-3xl mb-4 ">CONTATO</h1>
                    <button class="button-home flex mx-auto border p-3 px-6" onClick={onContatoButtonClick}>View</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Slide5;