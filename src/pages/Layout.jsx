import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import "../styles/global.css";
import { Outlet } from "react-router-dom";

const SimpleLayout = ({ children }) => {
    return (
        <>
        <div className="layout">
        <main>{children}</main>
        <Outlet />
        </div>
        </>
    );
    }

const NormalLayout = ({ children }) => {
    return (
        <>
        <div className="layout">
        <Header />
        <main>{children}</main>
        <Outlet />
        <Footer />
        </div>
        </>
    );
    }

const Layout = ({ children }) => {
        return NormalLayout({children});
}   
export default Layout;