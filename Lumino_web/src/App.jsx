import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/common/Header";
import Footer from "./assets/components/common/Footer";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blogpage from "./pages/Blogpage";
import ContactPage from "./pages/ContactPage";
import JoinUs from "./pages/JoinUs";
import Esports from "./pages/Esports";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blogpage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/esports" element={<Esports />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
