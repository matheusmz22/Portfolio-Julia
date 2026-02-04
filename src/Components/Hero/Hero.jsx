function Hero({isMobile, isMediumMobile}) {
  return (
    <section id="home">
      {isMobile ? (
        //////////////////////////
        //// MOBILE VERSION //////
        //////////////////////////

        <div className="relative h-screen w-screen overflow-hidden">
          {/* Image */}
          <img
            src="public\Images\HeroImage.jpg"
            alt="Julia Machado's Picture"
            className="absolute inset-0 h-full w-full object-cover image-filter"
            style={{objectPosition: "65%"}}
          />

          {/* Name and Button */}
          <div className="relative z-10 flex flex-col justify-between h-full py-8">
            <div
              className={`text-brownText w-fit text-3xl font-name mt-10 ml-1 text-center ${isMediumMobile && "ml-15 text-4xl mt-15"}`}
            >
              <h1>Julia</h1>
              <h1>Machado</h1>
            </div>

            <div className="flex justify-center mb-20">
              <button className="bg-brown text-whiteText w-55 h-12 rounded-3xl text-[1.65rem] drop-shadow-black drop-shadow-lg">
                View Resume
              </button>
            </div>
          </div>
        </div>
      ) : (
        //////////////////////////
        //// DESKTOP VERSION //////
        //////////////////////////
        <>
          <div className="relative h-screen w-screen overflow-hidden flex flex-col">
            <img
              src="public\Images\HeroImage.jpg"
              alt="Julia Machado's Picture"
              className="absolute inset-0 h-screen w-screen image-filter object-cover"
              style={{objectPosition: "center top"}}
            />

            {/* Name and Button (DESKTOP) */}

            <div className="relative z-10 flex flex-col items-center xl:gap-16 xl:ml-[25vh] lg:gap-10 lg:mt-[30vh] md:gap-8 md:mt-[18vh] md:ml-[5vh] w-fit">
              <div className="flex flex-col items-center">
                <h1 className="text-brownText md:text-3xl lg:text-4xl xl:text-5xl text-center uppercase font-extralight">
                  Julia Machado
                </h1>
                <div className="h-0.5 w-1/2 bg-brownText/30 mt-4" />
              </div>

              {/* CTA BUTTON - RESUME */}
              <button className="bg-brown text-whiteText rounded-full md:text-lg lg:text-xl xl:text-2xl md:px-8 md:py-2 xl:px-12 drop-shadow-lg drop-shadow-black font-name cursor-pointer hover:bg-brown-hover hover:text-whiteText-hover transition-colors">
                View Resume
              </button>
            </div>

            {/* HERO FOOTER CLASS  */}
            <div className="absolute bottom-0 left-0 w-full bg-brown xl:py-9 md:py-6 z-10 flex flex-col">
              <nav className="flex justify-center items-center lg:gap-16 xl:gap-20 md:gap-6 md:text-[16px] text-whiteText text-xl  font-semibold xl:text-[21px]">
                <a className="cursor-pointer hover:opacity-70 transition-opacity">
                  Costume / Wardrobe
                </a>
                <span className="text-whiteText/40">|</span>

                <a className="cursor-pointer hover:opacity-70 transition-opacity">
                  Character & Styling
                </a>
                <span className="text-whiteText/40">|</span>

                <a className="cursor-pointer hover:opacity-70 transition-opacity">
                  Performance
                </a>
                <span className="text-whiteText/40">|</span>

                <a className="cursor-pointer hover:opacity-70 transition-opacity">
                  Let's work
                </a>
              </nav>

              <div className="h-px w-3/4 mx-auto bg-whiteText md:mt-4 lg:mt-6" />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Hero;
