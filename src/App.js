import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Nav from "./components/Nav";
import Home from "./views/Home";
import Tasks from "./views/Tasks";
import Login from "./views/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#F3F3F3] min-h-screen flex flex-col items-center selection:bg-black selection:text-white">
        {/* <Nav /> */}
        <ToastContainer className="fixed top-0" />
        <Routes>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="tasks" element={<Tasks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
