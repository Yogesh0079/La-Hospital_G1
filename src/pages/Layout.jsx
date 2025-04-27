import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
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
    if(window.location.href.split("/").pop() == "dashboard" || window.location.href.split("/").pop() == "appointment" || window.location.href.split("/").pop() == "report") {
        return SimpleLayout({children});
    }
    else {
        return NormalLayout({children});
    }
}   
export default Layout;