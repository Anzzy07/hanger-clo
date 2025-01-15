import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserProvider } from "./context/user.context";
import { ProductProvider } from "./context/product.context";

import { Homepage } from "./pages/Home/Homepage";
import { Shop } from "./pages/Shop/Shop";
import { Navbar } from "./components/Navbar/Navbar";
import { Auth } from "./pages/Authentication/Auth";
import { CartProvider } from "./context/cart.context";
import { Checkout } from "./pages/Checkout/Checkout";

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Router>
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
