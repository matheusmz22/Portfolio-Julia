import {Routes, Route} from "react-router-dom";

import Layout from "./Layout";
import TwelfthNight from "./pages/costume/TwelfthNight";
import Uniretown from "./pages/costume/Uniretown";
import IntimateApparel from "./pages/costume/IntimateApparel";
import Servant from "./pages/costume/Servant";
import Bridge from "./pages/costume/Bridge";

function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Layout />} />

      {/* COSTUME PAGES */}
      <Route path="/costume/twelfth-night" element={<TwelfthNight />} />
      <Route path="/costume/urinetown" element={<Uniretown />} />
      <Route path="/costume/intimate-apparel" element={<IntimateApparel />} />
      <Route path="/costume/servant" element={<Servant />} />
      <Route path="/costume/bridge" element={<Bridge />} />
    </Routes>
  );
}

export default App;
