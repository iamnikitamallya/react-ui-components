import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";

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
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
