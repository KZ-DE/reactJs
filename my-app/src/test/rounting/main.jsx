// router dom di panggil pada app.js atau file yang menampung semua Page
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Abaut from "./pages/Abaute";
import NotFound from "./pages/NotFund";

function Rounting() {
  return (
    // perhatikan urutan pemanggilan dan juga posisi deklarasi
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Abaut" element={<Abaut />} />

        {/* untuk page yang ga ada halaman maka menggunakan '*' pada path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Rounting;
