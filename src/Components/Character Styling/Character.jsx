import CostumeGallery from "../../Components/Costume Wardrobe/CostumeGallery";

import img1 from "../../assets/Character/img1.jpg";
import img2 from "../../assets/Character/img2.jpg";
import img3 from "../../assets/Character/img3.jpg";
import img4 from "../../assets/Character/img4.jpg";
import img5 from "../../assets/Character/img5.jpg";
import img6 from "../../assets/Character/img6.jpg";
import img7 from "../../assets/Character/img7.jpg";
import img8 from "../../assets/Character/img8.jpg";
import img9 from "../../assets/Character/img9.jpg";
import img10 from "../../assets/Character/img10.jpg";
import {useState} from "react";

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function Character({isMobile}) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <section id="Character">
        <h1 className="text-brownText mt-20 mb-10 w-fit mx-auto text-2xl sm:text-4xl lg:text-[2.3rem]">
          Character & Styling{" "}
        </h1>
      </section>

      {isMobile ? (
        <>
          <div className="gallery-scroll my-10">
            {imgs.map((img, i) => {
              return (
                <a className="character-item px-3" key={img}>
                  <img
                    onClick={() => setActiveImage(img)}
                    src={img}
                    className="character-item sm:h-[50vh] h-[30vh] "
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
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 max-w-6xl mx-auto">
            {imgs.map((img, i) => {
              return (
                <img
                  onClick={() => setActiveImage(img)}
                  key={i}
                  src={img}
                  className={` w-full object-cover cursor-pointer hover:scale-[1.1] transition-all `}
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

export default Character;
