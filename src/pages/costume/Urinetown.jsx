import img1 from "../../assets/urinetown/img1.jpg";
import img2 from "../../assets/urinetown/img2.jpg";
import img3 from "../../assets/urinetown/img3.jpg";
import img4 from "../../assets/urinetown/img4.jpg";
import img5 from "../../assets/urinetown/img5.jpg";
import img6 from "../../assets/urinetown/img6.jpg";
import img7 from "../../assets/urinetown/img7.jpg";
import img8 from "../../assets/urinetown/img8.jpg";
import img9 from "../../assets/urinetown/img9.jpg";
import img10 from "../../assets/urinetown/img10.jpg";
import img11 from "../../assets/urinetown/img11.jpg";
import img12 from "../../assets/urinetown/img12.jpg";
import img13 from "../../assets/urinetown/img13.jpg";
import img14 from "../../assets/urinetown/img14.jpg";
import img15 from "../../assets/urinetown/img15.jpg";
import img16 from "../../assets/urinetown/img16.jpg";
import img17 from "../../assets/urinetown/img17.jpg";
import heroImg from "../../assets/urinetown/heroImg.jpg";
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
  img17,
];

function Uniretown() {
  return (
    <section id="uniretown">
      <CostumeGallery
        title="Urinetown"
        role="Costume Designer"
        directed="Directed by Katie Banville & Melissa Glasgow"
        heroImage={heroImg}
        images={imgs}
      />
    </section>
  );
}

export default Uniretown;
