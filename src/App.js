import './CSS/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './componets/Navbar';
import { Landingpage } from './pages/Landingpage';
import { Footer } from './componets/Footer';

function App() {
  return (
    <>
       <div className='mainDiv'>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
       </div>
    </>
  );
}

export default App;
