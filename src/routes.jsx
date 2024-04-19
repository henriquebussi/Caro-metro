import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Userpage from "./pages/Userpage";
import Cadastro from "./pages/Cadastro";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/user" element={<Userpage />} />
      <Route path="/cadastro" element={<Cadastro/>}/>
    </Routes>
  );
}

export default MainRoutes;
