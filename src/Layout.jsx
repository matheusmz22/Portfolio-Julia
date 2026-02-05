import {useMediaQuery} from "react-responsive";

import Hero from "./Components/Hero/Hero";
import Costume from "./Components/Costume Wardrobe/Costume";

function Layout() {
  const isMobile = useMediaQuery({maxWidth: 780});
  const isMediumMobile = useMediaQuery({minWidth: 570});

  return (
    <>
      <Hero isMobile={isMobile} isMediumMobile={isMediumMobile} />
      <Costume />
      {/* Character */}
      {/* Performance */}
      {/* LetsWork */}
    </>
  );
}

export default Layout;
