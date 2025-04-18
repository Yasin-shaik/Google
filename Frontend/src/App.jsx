import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AppProvider } from "./context/AppContext"; // Import AppProvider
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Landing from "./pages/Landing.jsx";
import Register from "./pages/SignUp.jsx";
import Profile from "./pages/UserDetails.jsx";

import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ScanQR from "./pages/scanQR.jsx";
import Results from "./pages/Results.jsx";

function App() {
  const [product, setProduct] = useState("");
  const location = useLocation(); // Get current location

  return (
    <AppProvider>
      {/* Conditionally render Navbar based on the route */}
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/forgot-password" &&
        location.pathname !== "/reset-password" && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-details" element={<Profile />} />
        <Route path="/scanQR" element={<ScanQR setProduct={setProduct} />} />
        <Route path="/results" element={<Results product={product} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>

      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/forgot-password" &&
        location.pathname !== "/reset-password" && <Footer />}
    </AppProvider>
  );
}

export default function Root() {
  return (
    <Router>
      <App /> {/* Render App component */}
    </Router>
  );
}
