import React from 'react'

const Slide4 = ({onSobreButtonClick}) => {
  return (
    <div>
        <section class="home-container-sobre">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="home-title sm:text-3xl mb-4 ">SOBRE</h1>
                    <button class="button-home flex mx-auto border p-3 px-6" onClick={onSobreButtonClick}>View</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Slide4;