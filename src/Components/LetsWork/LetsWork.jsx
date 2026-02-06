import {FaInstagram} from "react-icons/fa";
import {CiLinkedin} from "react-icons/ci";

function LetsWork() {
  return (
    <section id="Work">
      <h1 className="text-brownText my-30 mb-5 w-fit mx-auto text-2xl sm:text-4xl lg:text-[2.3rem]">
        Let's Work
      </h1>
      <h2 className="w-fit mx-auto text-2xl sm:text-5xl text-brownText uppercase tracking-[0.2em]">
        Julia Machado
      </h2>
      <div className="flex justify-between items-center text-whiteText mt-8 mb-4 h-40 sm:h-50 lg:h-55 w-[40vh] sm:w-[50vh] md:w-[65vh] lg:w-[80vh] xl:w-[90vh] mx-auto bg-brown rounded-xl">
        <div className="text-sm sm:text-lg md:text-xl lg:text-[1.35rem] flex flex-col justify-center pl-3 pt-2 sm:pt-0">
          <span>Email:</span>
          <span className="mb-3">axjullia@gmail.com</span>
          <span>Phone:</span>
          <span className="mb-3">+1 442 279-9553</span>
          <a
            className="text-center cursor-pointer transition-colors hover:bg-brown-resume-hover sm:w-28 md:w-32 md:p-1.5 w-22 p-1 text-md bg-brown-resume rounded-lg"
            aria-label="Julia's Resume"
          >
            <span>Resume</span>
          </a>
        </div>
        <div>
          <div className="flex flex-col justify-center gap-10 sm:gap-15 lg:gap-10 px-5 sm:pr-16 items-center">
            <a
              href="https://www.instagram.com/juliamachado.wardrobe?igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
              aria-label="Julia's Instagram"
              className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.3rem]"
            >
              <FaInstagram />
            </a>
            <a
              aria-label="Julia's LinkedIn"
              href="https://www.linkedin.com/in/julia-machado-1502/"
              target="_blank"
              className="text-4xl sm:text-5xl md:text-[3.4rem] xl:text-6xl "
            >
              <CiLinkedin />
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-center w-fit mb-6 mx-auto px-8 text-md sm:text-lg md:text-xl lg:text-[1.3rem] xl:text-2xl text-brownText">
        Available for film, television, and theatre projects. Open to travel and
        relocation.
      </h1>
    </section>
  );
}

export default LetsWork;
