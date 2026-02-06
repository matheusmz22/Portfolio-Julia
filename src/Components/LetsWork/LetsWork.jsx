function LetsWork() {
  return (
    <section id="Work">
      <h1 className="text-brownText my-30 mb-5 w-fit mx-auto text-2xl sm:text-4xl lg:text-[2.3rem]">
        Let's Work
      </h1>
      <h2 className="w-fit mx-auto text-2xl sm:text-5xl text-brownText uppercase tracking-[0.2em]">
        Julia Machado
      </h2>
      <div className="flex justify-between items-center text-whiteText mt-8 mb-4 h-40 sm:h-50 w-[40vh] sm:w-[50vh] md:w-[65vh] lg:w-[80vh] mx-auto bg-brown rounded-xl">
        <div className="text-sm sm:text-lg flex flex-col justify-center pl-3 pt-2 sm:pt-0">
          <span>Email:</span>
          <span className="mb-3">axjullia@gmail.com</span>
          <span>Phone:</span>
          <span className="mb-3">+1 442 279-9553</span>
          <a className="text-center hover:bg-brownText sm:w-28 w-22 p-1 text-md bg-brown-hover rounded-lg">
            <span>Resume</span>
          </a>
        </div>
        <div>
          <div className="flex flex-col justify-center gap-10 sm:gap-15 px-5 sm:pr-12 items-center">
            <a>Instagram</a>
            <a>LinkedIn</a>
          </div>
        </div>
      </div>
      <h1 className="text-center w-fit mb-6 mx-auto px-8 text-md sm:text-lg md:text-xl text-brownText">
        Available for film, television, and theatre projects. Open to travel and
        relocation.
      </h1>
    </section>
  );
}

export default LetsWork;
