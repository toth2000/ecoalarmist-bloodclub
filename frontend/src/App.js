import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import './App.css';
import IntroPage from './pages/IntroPage/IntroPage';
import BC_LOGIN from './pages/bc-login/login';
import BC_SIGNUP from './pages/bc-signup/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' element = {<IntroPage/>}/>
          <Route path = "*" element = {<Navigate to ='/' />}/>
          <Route path = "bloodclub" >
            <Route path='register' element={<BC_SIGNUP/>} />
            <Route path='login' element={<BC_LOGIN/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
