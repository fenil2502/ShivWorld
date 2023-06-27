import "./App.css";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Dashboard from "./Components/Dashboard";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Mainpage from "./Container/Mainpage";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/homepage" element={<Dashboard />} />
          <Route path="/aboutpage" element={<About />} />
          <Route path="/servicepage" element={<Services />} />
          <Route path="/teampage" element={<Team />} />
          <Route path="/contactUsPage" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
