import logo from './logo.svg';
import './App.css';
import NavBarHeader from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import RoutesToPages from './RoutesToPages';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/MidTermProjectReact">
        <NavBarHeader />
        <RoutesToPages />
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
