import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register"; // 1. Import your new component
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      {/* 2. Add the route path for registration */}
      <Route path="/register" element={<Register />} /> 
    </Routes>
  );
}

export default App;