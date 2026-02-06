import CostumeGallery from "../../Components/Costume Wardrobe/CostumeGallery";

import img1 from "../../assets/Intimate/img1.jpg";
import img2 from "../../assets/Intimate/img2.jpg";
import img3 from "../../assets/Intimate/img3.jpg";
import img4 from "../../assets/Intimate/img4.jpg";
import img5 from "../../assets/Intimate/img5.jpg";
import img6 from "../../assets/Intimate/img6.jpg";

const imgs = [img1, img2, img3, img4, img5, img6];

// Intimate Apparel
// Sketches
function IntimateApparel() {
  return (
    <section id="intimate-apparel">
      <CostumeGallery title="Intimate Apparel" role="Sketches" images={imgs} />
    </section>
  );
}

export default IntimateApparel;
