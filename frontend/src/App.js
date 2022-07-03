import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom'
import './App.css';
import IntroPage from './pages/IntroPage/IntroPage';
import BC_LOGIN from './pages/bc-login/login';
import BC_SIGNUP from './pages/bc-signup/signup';
import Navbar from './Components/Navbar/Navbar';
import BloodClubNavbar from './Components/BloodClub Navbar/Navbar';
import BC_Dashboard from './pages/bc-dashboard/dashboard';
import PatientFormPage from './pages/PatientFormPage/PatientFormPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route element={<><Navbar/><Outlet/> </>} >
            <Route path = '/' element = {<IntroPage/>}/>
            <Route path = '/patient/form' element = {<PatientFormPage/>} />
          </Route>
          <Route path = "bloodclub" element={<><BloodClubNavbar/><Outlet/> </>} >
            <Route path='dashboard' element={<BC_Dashboard/>}/>
            <Route path='register' element={<BC_SIGNUP/>} />
            <Route path='login' element={<BC_LOGIN/>} />
          </Route>
          <Route path = "*" element = {<Navigate to ='/' />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
