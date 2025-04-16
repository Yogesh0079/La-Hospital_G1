import Login from '../pages/Login.jsx';
import Header from '../components/general/Header.jsx';
import Intro from "../components/home/intro.jsx";
import Intro_Carousel from "../components/home/Carousel.jsx";
import '../styles/App.css';

function App() {

  return (
    <>
      <div
      className="dashboard"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "right",
        justifyContent: "right",
        minHeight: "100vh",
        backgroundColor: "rgba(2, 3, 28, 0.16)",
        color: "#fff",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
        <Intro/>
        <Intro_Carousel/>
    </div>
    </>
  )
}

export default App
