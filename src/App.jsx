import {useMediaQuery} from "react-responsive";
import Hero from "./Components/Hero/Hero";

function App() {
  const isMobile = useMediaQuery({maxWidth: 780});
  const isMediumMobile = useMediaQuery({minWidth: 570});

  return <Hero isMobile={isMobile} isMediumMobile={isMediumMobile} />;
}

export default App;
