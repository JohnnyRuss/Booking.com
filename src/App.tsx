import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import HotelPage from "./Pages/HotelPage";
import AllHotelsListPage from "./Pages/AllHotelsListPage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<AllHotelsListPage />} />
        <Route path="/hotels/:hotelId" element={<HotelPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
