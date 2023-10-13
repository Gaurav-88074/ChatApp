import logo from "./logo.svg";
import classes from "./App.module.css";
import Dashboard from "./screens/Dashboard";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import { useEffect } from "react";
import functions from './utils/Auth';
import PrivateRoutes from "./utils/PrivateRoutes";
function App() {
  const obj = functions();
  useEffect(() => {
    obj.checkUserStatus();
  }, [])
  // return <Dashboard/>
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
  );
}

export default App;
