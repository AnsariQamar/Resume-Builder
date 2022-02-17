import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import GettingStarted from './Pages/GettingStarted';
import WorkExp from './Pages/WorkExp';
import WorkDetails from './Pages/WorkDetails';
import Education from './Pages/Education';
import EdDetails from './Pages/EdDetails';
import Skills from './Pages/Skills';
import SkillsDetails from './Pages/SkillsDetails';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<GettingStarted/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/work" element={<WorkExp/>}/>
          <Route path='/workDetails' element={<WorkDetails/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/edDetails' element={<EdDetails/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/skillsDetails' element={<SkillsDetails/>}/>

          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;