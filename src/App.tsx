import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import HotelPage from "./Pages/HotelPage";
import AllHotelsListPage from "./Pages/AllHotelsListPage";
import ArticlePage from "./Pages/ArticlePage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<AllHotelsListPage />} />
        <Route path="/hotels/:hotelId" element={<HotelPage />} />
        <Route path="/inspirations/:articleId" element={<ArticlePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
