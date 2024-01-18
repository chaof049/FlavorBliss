import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Features from "./pages/Features";
import UseCases from "./pages/UseCases";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage></Homepage>}></Route>
        <Route path="/features" element={<Features></Features>}></Route>
        <Route path="/use-cases" element={<UseCases></UseCases>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
