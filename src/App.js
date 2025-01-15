import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Home/Homepage";
import { Shop } from "./pages/Shop/Shop";
import { Navbar } from "./components/Navbar/Navbar";
import { Auth } from "./pages/Authentication/Auth";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
