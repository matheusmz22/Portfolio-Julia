import CostumeGallery from "../../Components/Costume Wardrobe/CostumeGallery";

import hero from "../../assets/servant/hero.jpg";
import img1 from "../../assets/servant/img1.jpg";
import img2 from "../../assets/servant/img2.jpg";
import img3 from "../../assets/servant/img3.jpg";
import img4 from "../../assets/servant/img4.jpg";
import img5 from "../../assets/servant/img5.jpg";
import img6 from "../../assets/servant/img6.jpg";
import img7 from "../../assets/servant/img7.jpg";
import img8 from "../../assets/servant/img8.jpg";

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];

function Servant() {
  return (
    <section id="servant">
      <CostumeGallery
        title="The Servant of Two Masters"
        role="Dresser"
        directed="Directed by Geno Car"
        heroImage={hero}
        images={imgs}
      />
    </section>
  );
}

export default Servant;
