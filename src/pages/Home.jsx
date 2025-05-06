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
        margin: "100px 0",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "right",
        justifyContent: "right",
        minHeight: "100vh",
        color: "#f0f0f0",
        padding: "40px 20px",
        backgroundColor: "#1a1a1a",
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
