import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
// import Home from "./pages/Home";
import Home from "./pages/HomeX"
import Login from "./pages/Login";
import NoPage from "./pages/Nopage";
import UserDetails from "./pages/userdetails";
import Dashboard from "./pages/Dashboard";
import Appointment from "./pages/Appointment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="user/:user_id"
            element={<UserDetails />}
          />
          <Route path="*" element={<NoPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);