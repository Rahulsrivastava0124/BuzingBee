import './App.css';
import Hero from './Components/Home/Hero.jsx'
import Navbar from './Components/Home/Navbar.jsx';
import Services from './Components/Services.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Hero/>
    <Services/>
    </div>
  );
}

export default App;
