import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Charities from "./components/Charities";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile";
import AboutPage from "./components/AboutPage";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='charities' element={<Charities />}></Route>

        <Route path='about' element={<AboutPage />}></Route>
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
