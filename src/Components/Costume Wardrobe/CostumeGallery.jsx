import {useState} from "react";
import {useMediaQuery} from "react-responsive";
import {useNavigate} from "react-router-dom";

function CostumeGallery({title, role, directed, heroImage, images}) {
  const [activeImage, setActiveImage] = useState(null);
  const isMobile = useMediaQuery({maxWidth: 780});
  const navigate = useNavigate();

  return (
    <>
      <button
        className="text-2xl md:text-3xl ml-3 text-brownText z-50 top-4 left-4 sticky back-arrow cursor-pointer"
        onClick={() => navigate(-1)}
      >
        &larr;
      </button>
      <div className="text-brownText  my-4">
        <h1 className="w-fit mx-auto font-semibold text-xl md:text-2xl lg:text-3xl">
          {title}
        </h1>
        <h2 className="w-fit mx-auto text-center text-md md:text-lg lg:text-xl px-2 my-2 leading-tight">
          {role}
        </h2>
        <h3 className="w-fit mx-auto text-center text-sm opacity-90 ">
          {directed}
        </h3>
      </div>
      {/* HERO IMAGE AND MOBILE LAYOUT */}
      {isMobile ? (
        <>
          <img src={heroImage} className="w-full h-[50vh] px-4 object-cover " />

          <div className="gallery-scroll my-10">
            {images.map((img, i) => {
              return (
                <a className="gallery-item px-3" key={img}>
                  <img
                    onClick={() => setActiveImage(img)}
                    src={img}
                    className="gallery-item "
                    key={i}
                  />
                </a>
              );
            })}
          </div>
        </>
      ) : (
        // DESKTOP LAYOUT
        // --------------
        <>
          <img
            src={heroImage}
            className="mx-auto max-w-3xl w-full px-4 aspect-3/2 object-cover mb-20"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 max-w-6xl mx-auto">
            {images.map((img, i) => {
              const isLastOdd = images.length & (3 === 1) && images.length - 1;

              return (
                <img
                  onClick={() => setActiveImage(img)}
                  key={i}
                  src={img}
                  className={`w-full object-cover cursor-pointer hover:scale-[1.1] transition-all ${isLastOdd ? "lg:col-span-2 lg:mx-auto" : ""}`}
                />
              );
            })}
          </div>
        </>
      )}
      {activeImage && (
        <>
          <div
            className="fixed inset-0 bg-black/80 z-50 flex-col flex items-center justify-center"
            onClick={() => setActiveImage(null)}
          >
            <button
              className="text-3xl z-60 bottom-4 relative text-whiteText lightbox cursor-pointer"
              onClick={() => setActiveImage(null)}
            >
              &#x2715;
            </button>
            <img
              src={activeImage}
              className="max-w-[90%] max-h-[90%] object-contain lightbox"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </>
      )}
    </>
  );
}

export default CostumeGallery;
