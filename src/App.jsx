import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
// import Home from "./pages/Home";
import Home from "./pages/HomeX"
import Login from "./pages/Login";
import NoPage from "./pages/Nopage";
import UserDetails from "./pages/userDetailsX";
import Dashboard from "./pages/Dashboard";
import Appointment from "./pages/Appointment";
import About from "./pages/about"
import Contact from "./pages/contact";
import Report from "./pages/Report";
import TestResults from "./pages/TestResults";
import ModifyReports from "./pages/modifyReports";
import Squidward from "./pages/Squidward";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="userDetails"
            element={<UserDetails />}
          />
          <Route path="*" element={<NoPage />} />
          <Route path="report" element={<Report />} />
          <Route path="TestResults" element={<TestResults />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="modify" element={<ModifyReports />} />
          <Route path="Squidward" element={<Squidward />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);