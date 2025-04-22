import logo from "../../assets/logo-removebg-preview.png";
import { useNavigate } from 'react-router-dom';


function Header(){
    const navigate = useNavigate();

    function goToHome() {
        navigate('/');
    }
    return (
        <>
        <div className="header">
            <p><b onClick={goToHome}><img className="header-hover" src={logo} alt="logo" /></b></p>
            <div>
            <a className="header-link header-hover" href="#">History</a>
            <a className="header-link header-hover" href="#">Team</a>
            <a className="header-link header-hover" href="#">About Us</a>
            </div>
        </div>
        </>
    )
}
export default Header