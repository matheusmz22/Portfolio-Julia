import hero from "../../assets/urinetown/hero.JPG";
import img1 from "../../assets/urinetown/img1.JPG";
import img2 from "../../assets/urinetown/img2.JPG";
import img3 from "../../assets/urinetown/img3.JPG";
import img4 from "../../assets/urinetown/img4.JPG";
import img5 from "../../assets/urinetown/img5.JPG";
import img6 from "../../assets/urinetown/img6.JPG";
import img7 from "../../assets/urinetown/img7.JPG";
import img8 from "../../assets/urinetown/img8.JPG";
import img9 from "../../assets/urinetown/img9.JPG";
import img10 from "../../assets/urinetown/img10.JPG";
import img11 from "../../assets/urinetown/img11.JPG";
import img12 from "../../assets/urinetown/img12.JPG";
import img13 from "../../assets/urinetown/img13.JPG";
import img14 from "../../assets/urinetown/img14.JPG";
import img15 from "../../assets/urinetown/img15.JPG";
import img16 from "../../assets/urinetown/img16.JPG";

import CostumeGallery from "../../Components/Costume Wardrobe/CostumeGallery";

const imgs = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];

function Uniretown() {
  return (
    <section id="uniretown">
      <CostumeGallery
        title="Urinetown"
        role="Costume Designer"
        directed="Directed by Katie Banville & Melissa Glasgow"
        heroImage={hero}
        images={imgs}
      />
    </section>
  );
}

export default Uniretown;
