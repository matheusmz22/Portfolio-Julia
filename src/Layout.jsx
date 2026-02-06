import {useMediaQuery} from "react-responsive";

import Hero from "./Components/Hero/Hero";
import Costume from "./Components/Costume Wardrobe/Costume";
import Character from "./Components/Character Styling/Character";
import Performances from "./Components/Performances/Performances";

function Layout() {
  const isMobile = useMediaQuery({maxWidth: 780});
  const isMediumMobile = useMediaQuery({minWidth: 570});

  return (
    <>
      <Hero isMobile={isMobile} isMediumMobile={isMediumMobile} />
      <Costume />
      <Character isMobile={isMobile} />
      <Performances />
      {/* LetsWork */}
    </>
  );
}

export default Layout;
