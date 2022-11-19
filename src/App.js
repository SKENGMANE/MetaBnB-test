import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AirBnB from "./pages/AirBnB";
import ConnectWallet from "./pages/ConnectWallet";
import PLACETOSTAY from "./pages/PLACETOSTAY";
import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/connect-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/place-to-stay":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (

    <h1>React Responsive - a guide</h1>      
{isMobileDevice && <Mobile />}
  {isTabletDevice && <>
  <TabletMobile />
  {isDesktop && <Desktop />}
  {isLaptop && <Laptop />}
  {isBigScreen && <BigScreen />}
</>}
    <Routes>
      <Route path="/" element={<AirBnB />} />

      <Route path="/connect-wallet" element={<ConnectWallet />} />

      <Route path="/place-to-stay" element={<PLACETOSTAY />} />
    </Routes>
  );
}
export default App;
