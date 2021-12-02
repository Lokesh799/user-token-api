import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import navLink from './component/NavLink';
import Registration from './component/Registarion';
import Login from './component/Login';
import Dashbord from './component/Dashbord';
import Famlies from './component/Famlies';
import Product from './component/Product';
import Location from './component/Location';
import Transactions from './component/Transactions';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={navLink} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/dashbord" component={Dashbord} />
        <Route path="/famlies" component={Famlies} />
        <Route path="/product" component={Product} />
        <Route path="/location" component={Location} />
        <Route path="/transactions" component={Transactions} />
      </Router>
    </div>
  );
}

export default App;