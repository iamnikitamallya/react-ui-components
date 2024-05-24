import "./App.css";
import "./assets/style/custom.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Components from "./pages/Components";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <>
      <BrowserRouter>
        <div className="App" onUpdate={() => window.scrollTo(0, 0)}>
          <ScrollToTop />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/components" element={<Components />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
