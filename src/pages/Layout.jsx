import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import { Outlet } from "react-router-dom";
const Layout = ({ children }) => {
    return (
        <div className="layout">
        <Header />
        <main>{children}</main>
        <Outlet />
        <Footer />
        </div>
    );
    }
export default Layout;