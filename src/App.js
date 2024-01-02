import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Nav from "./components/Nav";
import Home from "./views/Home";
import Tasks from "./views/Tasks";
import Login from "./views/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#F3F3F3] bg-cover h-max min-h-screen flex flex-col items-center selection:bg-black selection:text-white">
        {/* <Nav /> */}
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
