import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register"; // 1. Import your new component
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer"
import PostReview from "./components/Dealers/PostReview"



function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      {/* 2. Add the route path for registration */}
      <Route path="/register" element={<Register />} /> 
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer />} />
      <Route path="/postreview/:id" element={<PostReview />} />
      
    </Routes>
  );
}

export default App;