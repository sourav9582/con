// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Footer from './Footer';
import Home from './Home';

function App() {
  return (
    <>
    <Navbar />
    
    <Home />
    <Footer />
    </>
  );
}

export default App;
