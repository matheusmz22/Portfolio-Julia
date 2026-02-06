import {useNavigate} from "react-router-dom";

function Uniretown() {
  const navigate = useNavigate();

  return (
    <section id="uniretown">
      <button
        className="text-2xl md:text-3xl m-3 text-brownText z-50 top-4 left-4 sticky back-arrow cursor-pointer"
        onClick={() => navigate(-1)}
      >
        &larr;
      </button>
      <div className="flex flex-col  items-center justify-center h-60 border border-brownText/40">
        <h3 className="uppercase tracking-[0.3em] text-xl text-brownText">
          Coming Soon
        </h3>
        <p className="mt-2 text-sm opacity-80">New work in progress</p>
      </div>
    </section>
  );
}

export default Uniretown;
