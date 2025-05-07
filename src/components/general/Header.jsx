import logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import "../../styles/global.css";


function Header(){
    const navigate = useNavigate();
    const navigateHandler = (e) => {
        e.preventDefault();
        console.log(e);
        let {target_loc} = e.target;
        navigate(target_loc);
    }
    if (window.location.pathname === "/dashboard" || window.location.pathname === "/report") {
        return null; // Don't render the header on these pages
    }
    return (
        <>
            <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div onClick={() => {navigate('/')}} target_loc="/" className="flex items-center">
                    <img className="header-image box-border mr-8" src={logo} alt="" />
                    <span className="text-2xl font-bold text-blue-800 cursor-pointer">La Hospital</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <a onClick={() => {navigate('/')}} className="text-blue-800 font-medium hover:text-blue-600 transition cursor-pointer">Home</a>
                    <a onClick={() => {navigate('/about')}} className="text-gray-600 font-medium hover:text-blue-600 transition cursor-pointer">About Us</a>
                    <a onClick={() => {navigate('/services')}} className="text-gray-600 font-medium hover:text-blue-600 transition cursor-pointer">Services</a>
                    <a onClick={() => {navigate('/contact')}} className="text-gray-600 font-medium hover:text-blue-600 transition cursor-pointer">Contact</a>
                    {localStorage.getItem('uid') ? (<a onClick={() => {navigate('/dashboard')}} className="text-gray-600 font-medium hover:text-blue-600 transition cursor-pointer">Dashboard</a>) : null}
                </div>
                <div>
                    <a onClick={() => {navigate('/login')}} target_loc="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition shadow-md cursor-pointer">
                        Login
                    </a>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Header