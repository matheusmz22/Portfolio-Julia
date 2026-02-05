import CostumeGallery from "../../Components/Costume Wardrobe/CostumeGallery";
import heroImg from "../../assets/twelfth/heroImg.jpg";
import img1 from "../../assets/twelfth/img1.jpg";
import img2 from "../../assets/twelfth/img2.jpg";
import img3 from "../../assets/twelfth/img3.jpg";
import img4 from "../../assets/twelfth/img4.jpg";
import img5 from "../../assets/twelfth/img5.jpg";
import img6 from "../../assets/twelfth/img6.jpg";
import img7 from "../../assets/twelfth/img7.jpg";
import img8 from "../../assets/twelfth/img8.jpg";
import img9 from "../../assets/twelfth/img9.webp";

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function TwelfthNight() {
  return (
    <section id="twelfth-night">
      <CostumeGallery
        title="Twelfth Night"
        role="Assistant Costume Designer & Costume Construction Crew"
        directed="Directed by Linda  Libby"
        heroImage={heroImg}
        images={imgs}
      />
    </section>
  );
}

export default TwelfthNight;
