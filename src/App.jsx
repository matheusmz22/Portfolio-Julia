import {Routes, Route} from "react-router-dom";

import Layout from "./Layout";
import TwelfthNight from "./pages/costume/TwelfthNight";
import Urinetown from "./pages/costume/Urinetown";
import IntimateApparel from "./pages/costume/IntimateApparel";
import Servant from "./pages/costume/Servant";
import Bridge from "./pages/costume/Bridge";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Layout />} />

        {/* COSTUME PAGES */}
        <Route path="/costume/twelfth-night" element={<TwelfthNight />} />
        <Route path="/costume/urinetown" element={<Urinetown />} />
        <Route path="/costume/intimate-apparel" element={<IntimateApparel />} />
        <Route path="/costume/servant" element={<Servant />} />
        <Route path="/costume/bridge" element={<Bridge />} />
      </Routes>
    </>
  );
}

export default App;
