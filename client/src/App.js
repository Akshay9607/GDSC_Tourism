import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./Home/LandingPage";
import AllTours from "./AllTours/AllTours";
import { useSelector } from "react-redux";
import { getDirection } from "./Redux/slice";
import Package from "./Package/Package";
import Favourite from "./Components/Favourites/Favourite";


function App() {
  const direction = useSelector(getDirection);

  document.getElementsByTagName("html")[0].setAttribute("dir", direction);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tours" element={<AllTours />} />
          <Route path="/tour/:id" element={<Package />} />
          <Route path="/favourites" element={<Favourite />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
