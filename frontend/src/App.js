import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import './App.css';
import IntroPage from './pages/IntroPage/IntroPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' element = {<IntroPage/>}/>
          <Route path = "*" element = {<Navigate to ='/' />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
