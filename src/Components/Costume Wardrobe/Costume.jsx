import {Link} from "react-router-dom";

function Costume() {
  return (
    <>
      <section id="Costume">
        <h1 className="text-brownText mt-12 w-fit mx-auto text-2xl sm:text-4xl lg:text-[2.3rem]">
          Costume / Wardrobe{" "}
        </h1>
      </section>
      <div className="my-16 text-brownText text-lg sm:text-3xl">
        <div className="mx-auto max-w-4xl grid grid-cols-4 gap-y-12 text-center px-6 lg:grid-cols-6 xl:grid-cols-8 xl:gap-x-14">
          <Link
            to="/costume/twelfth-night"
            className="lg:col-span-2 xl:col-span-3 hover:text-brown-hover  editorial-link"
          >
            Twelfth Night
          </Link>

          <Link
            to="/costume/urinetown"
            className=" col-span-2 xl:col-span-2 hover:text-brown-hover  editorial-link"
          >
            Urinetown
          </Link>

          <Link
            to="/costume/intimate-apparel"
            className="lg:col-span-2 xl:col-span-3 hover:text-brown-hover  editorial-link"
          >
            Intimate Apparel
          </Link>

          <Link
            to="/costume/servant"
            className="lg:col-span-3 xl:col-span-3 xl:col-start-2 row-start-2 col-span-2 hover:text-brown-hover  editorial-link"
          >
            The Servant of Two Masters
          </Link>

          <Link
            to="/costume/bridge"
            className="lg:col-span-3 xl:col-span-3 xl:col-start-5 row-start-2 col-span-2  hover:text-brown-hover editorial-link"
          >
            A View From the Bridge
          </Link>
        </div>
      </div>
    </>
  );
}

export default Costume;
