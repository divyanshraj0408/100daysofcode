import './App.css';
import "./components/Image"
import "./components/MainContent"
import "./components/Footer"
import MainContent from "./components/MainContent"
import Image from "./components/Image"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Image/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
