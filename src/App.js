import './CSS/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './componets/Navbar';
import { Landingpage } from './pages/Landingpage';
import { Footer } from './componets/Footer';
import { HomePage } from './pages/HomePage';
import SignUp from './pages/Signup';

function App() {
  return (
    <>
       <div className='mainDiv'>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/find-match' element={<HomePage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
       </div>
    </>
  );
}

export default App;
