import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Userpage from "./pages/Userpage";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/user" element={<Userpage />} />
    </Routes>
  );
}

export default MainRoutes;
