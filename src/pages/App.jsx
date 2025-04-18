import Login from '../pages/Login.jsx' 
import Header from '../components/general/Header.jsx'
import '../styles/App.css'
import Home from "./Home.jsx"
import Footer from '../components/general/Footer.jsx'
import Form from "../components/patient-form/patient-form.jsx"

function App() {

  return (
    <>
      <Header />
      <Login />
      <Home />
      <Form/>
      <Footer />
    </>
  )
}

export default App
