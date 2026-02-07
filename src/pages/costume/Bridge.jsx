import CostumeGallery from "../../Components/Costume Wardrobe/CostumeGallery";

import hero from "../../assets/bridge/hero.jpg";
import img1 from "../../assets/bridge/img1.jpg";
import img2 from "../../assets/bridge/img2.jpg";
import img3 from "../../assets/bridge/img3.jpg";
import img4 from "../../assets/bridge/img4.jpg";
import img5 from "../../assets/bridge/img5.jpg";
import img6 from "../../assets/bridge/img6.jpg";
import img7 from "../../assets/bridge/img7.jpg";
import img8 from "../../assets/bridge/img8.jpg";
import img9 from "../../assets/bridge/img9.jpg";
import img10 from "../../assets/bridge/img10.jpg";
import img11 from "../../assets/bridge/img11.jpg";

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
];

//A View from The Bridge
//Assistant Costume Designer
//Directed by Walter Allen Bennet

function Bridge() {
  return (
    <section id="bridge">
      <CostumeGallery
        title="A View from The Bridge"
        role="Assistant Costume Designer"
        directed="Directed by Walter Allen Bennet"
        heroImage={hero}
        images={imgs}
      />
    </section>
  );
}

export default Bridge;
