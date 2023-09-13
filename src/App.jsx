import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<div>sorry</div>} />
      </Routes>         
    </>
  )
}

export default App
