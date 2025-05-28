import App from "./App";
import EasterPage from "./pages/EasterPage";
import Errorpage from "./pages/Errorpage";
import HolyspiritPage from "./pages/HolyspiritPage";
import Home from "./pages/Home";
import LentenPage from "./pages/LentenPage";
import MarianPage from "./pages/MarianPage";
import Mass from "./pages/Mass";
import OccasionsPage from "./pages/OccasionsPage";
import PraisePage from "./pages/PraisePage";
import BaptismPage from "./pages/BaptismPage";
import DeathPage from "./pages/DeathPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <Errorpage />,
  },
  {
    path: "/masssongs",
    element: <Mass />,
    errorElement: <Errorpage />,
  },
  {
    path: "/lentensongs",
    element: <LentenPage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/Eastersongs",
    element: <EasterPage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/mariansongs",
    element: <MarianPage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/HolySpiritsongs",
    element: <HolyspiritPage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/Occasions",
    element: <OccasionsPage />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "baptism",
        element: <BaptismPage />,
        errorElement: <Errorpage />,
      },
      {
        path: "death",
        element: <DeathPage />,
        errorElement: <Errorpage />,
      },
    ],
  },
  {
    path: "/Praise",
    element: <PraisePage />,
    errorElement: <Errorpage />,
  },
];

export default routes;
