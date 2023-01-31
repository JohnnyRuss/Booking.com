import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import { Spinner } from "./components/Layouts";
// import LoginPage from "./Pages/LoginPage";
// import RegisterPage from "./Pages/RegisterPage";
const AllHotelsListPage = lazy(() => import("./Pages/AllHotelsListPage"));
const HotelPage = lazy(() => import("./Pages/HotelPage"));
const ArticlePage = lazy(() => import("./Pages/ArticlePage"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Spinner type="fixed" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<AllHotelsListPage />} />
          <Route path="/hotels/:hotelId" element={<HotelPage />} />
          <Route path="/inspirations/:articleId" element={<ArticlePage />} />
          {/* <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} /> */}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
