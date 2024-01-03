import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "animate.css";
import Home from "./views/Home";
import Tasks from "./views/Tasks";
import Login from "./views/Login";
import { ToastContainer, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const fade = cssTransition({
    enter: "animate__animated animate__fadeInUp",
    exit: "animate__animated animate__fadeOutDown",
  });
  return (
    <BrowserRouter>
      <div className="bg-[#F3F3F3] min-h-screen flex flex-col items-center selection:bg-black selection:text-white">
        <ToastContainer
          position="bottom-center"
          autoClose={1200}
          transition={fade}
          hideProgressBar
          newestOnTop
          closeOnClick
          closeButton={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="dark"
        />
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
