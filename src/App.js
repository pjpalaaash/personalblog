
import './App.css';
import About from './components/About';
import Connect from './components/Connect';
import Front from './components/Front';
import MyProjects from './components/MyProjects';
import MyResume from './components/MyResume';
import MySkills from './components/MySkills';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar />
    <Front />
    <About />
    <MyResume/>
    <MySkills/>
    <MyProjects/>
    <Connect/>
      
    </>
  );
}

export default App;
