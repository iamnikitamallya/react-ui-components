import "./App.css";
import "./assets/style/custom.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Learnings from "./pages/Learnings";
import Footer from "./components/common/Footer";
import Components from "./pages/Components";
import Brainstorm from "./components/Brainstorm";

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
      <div className="App" onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learnings" element={<Learnings />} />
            <Route path="/components" element={<Components />} />
            <Route path="/brainstorm" element={<Brainstorm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
