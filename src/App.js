import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import navLink from './component/NavLink';
import Registration from './component/Registarion';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={navLink} />
        <Route path="/registration" component={Registration} />
      </Router>
    </div>
  );
}

export default App;