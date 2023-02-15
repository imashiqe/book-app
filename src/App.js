import logo from './logo.svg';
import './App.css';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
}

export default App;
