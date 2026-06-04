import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

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
          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
