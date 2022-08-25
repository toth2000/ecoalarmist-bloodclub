import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom';

//custom css
//all the imported fonts are in here
import './App.css';

//authentication middleware for protected route
import AuthenticatedRoute from './pages/Authenticated/authenticatedRoute';

// navbar components
import Navbar from './Components/Navbar/Navbar';
import DashboardNavbar from './Components/dashboard Navbar/Navbar';
import BloodClubNavbar from './Components/BloodClub Navbar/Navbar';


//intro page and patient form page
import IntroPage from './pages/IntroPage/IntroPage';
import PatientFormPage from './pages/PatientFormPage/PatientFormPage'

//blood club pages
import BC_LOGIN from './pages/bc-login/login';
import BC_SIGNUP from './pages/bc-signup/signup';
import BC_Dashboard from './pages/bc-dashboard/dashboard';
import BC_PROFILE from './pages/bc-profile/profile';

function App() {
  return (
    <div className="App">
      <Router>
        {/* root route */}
        <Routes >
          {/* route for patient */}
          <Route element={<><Navbar/><Outlet/> </>} >
            <Route path = '/' element = {<IntroPage/>}/>
            <Route path = '/patient/form' element = {<PatientFormPage/>} />
          </Route>
          {/* route for blood club member */}
          <Route path = "bloodclub" element={<Outlet/>} >
            {/* blood club dashboard,profile */}
            <Route element={<><DashboardNavbar/><AuthenticatedRoute/></>}>
              <Route path='dashboard' element={<BC_Dashboard/>}/>
              <Route path='profile' element={<BC_PROFILE/>}/>
            </Route>
            {/* blood club authentication */}
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
