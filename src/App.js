// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Footer from './Footer';
import Home from './Home';
import Covid from './component/covid';

function App() {
  return (
    <>
    <Navbar />
    <Covid />
    <Home />
    <Footer />
    </>
  );
}

export default App;
