import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import About from "./pages/About";
import LLRApplication from "./pages/LLRApplication";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div className="container">

        <Sidebar />

        <div className="content">

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/about" element={<About />} />
            <Route path="/llr-application" element={<LLRApplication />} />
          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
