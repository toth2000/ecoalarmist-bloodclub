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
import AuthenticatedRoute from './pages/Authenticated/authenticatedRoute';
import DashboardNavbar from './Components/dashboard Navbar/Navbar';
import BC_PROFILE from './pages/bc-profile/profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route element={<><Navbar/><Outlet/> </>} >
            <Route path = '/' element = {<IntroPage/>}/>
            <Route path = '/patient/form' element = {<PatientFormPage/>} />
          </Route>
          <Route path = "bloodclub" element={<Outlet/>} >
            <Route element={<><DashboardNavbar/><AuthenticatedRoute/></>}>
              <Route path='dashboard' element={<BC_Dashboard/>}/>
              <Route path='profile' element={<BC_PROFILE/>}/>
            </Route>
            <Route  element={<><BloodClubNavbar/><Outlet/> </>} >
              <Route path='register' element={<BC_SIGNUP/>} />
              <Route path='login' element={<BC_LOGIN/>} />
            </Route>
          </Route>
          <Route path = "*" element = {<Navigate to ='/' />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
