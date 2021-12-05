import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import './custom.css';
// import Bannar from './Pages/Home/Bannar/Bannar';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
// import Bannar from './Pages/Home/Bannar/Bannar';
import Resume from './Pages/Resume/Resume';
import Footer from './Pages/Shared/Footer/Footer';
// import Header from './Pages/Shared/Header/Header';
import "animate.css/animate.min.css";
import About from './Pages/Home/About/About';
import MyProject from './Pages/Home/MyProject/MyProject';
import Contact from './Pages/Contact/Contact';
import Service from './Pages/Home/Service/Service';
import Resumes from './Pages/Home/Resume/Resumes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
          <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<About />} />
              <Route path="/resumes" element={<Resumes/>} />
          <Route path="/myproject" element={<MyProject />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Service/>} />
          </Route>
          <Route path="/" element={<Home />}>
             <Route path="" element={<About/>} />
             <Route path="/resumes" element={<Resumes/>} />
          <Route path="/myproject" element={<MyProject />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Service/>} />
          </Route>
          <Route path="resume" element={<Resume />} />
          <Route path="" element={<NotFound />} />
         
        </Routes>
        <Footer/>
      </BrowserRouter>



      {/* <BrowserRouter>
        <Header />
      
      
        <Switch>
         
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/resume">
            <Resume/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter> */}

    </div>
  );
}

export default App;
