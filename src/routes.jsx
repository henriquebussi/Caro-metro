import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Userpage from "./pages/Userpage";
import Cadastro from "./pages/Cadastro";
import Aluno from "./pages/Aluno"

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/user" element={<Userpage />} />
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/aluno" element={<Aluno/>}/>
    </Routes>
  );
}

export default MainRoutes;
