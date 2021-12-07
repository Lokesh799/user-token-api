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
import Protected from './component/protected';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={navLink} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/dashbord" component={Dashbord}/>
        <Route path="/famlies">
          <Protected Protected={Famlies} />
        </Route>
        <Route path="/product">
          <Protected Protected={Product} />
        </Route>
        <Route path="/location">
          <Protected Protected={Location} />
        </Route>
        <Route path="/transactions">
          <Protected Protected={Transactions} />
        </Route>
      </Router>
    </div>
  );
}

export default App;