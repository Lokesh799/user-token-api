import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import NavLink from './component/NavLink';
import Registration from './component/Registarion';
import Login from './component/Login';
// import Dashbord from './component/Dashbord';
import Famlies from './component/Famlies';
import Product from './component/Product';
import Location from './component/Location';
import Transactions from './component/Transactions';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


function App() {
  return (
    <div className="App">
      <Router>
      <NavLink/>
        <Switch>
          <PublicRoute path="/registration" component={Registration} />
          <PublicRoute path="/login" component={Login} />
        
        <PrivateRoute path="/product" component={Product} />
        <PrivateRoute path="/famlies" component={Famlies} />
        <PrivateRoute path="/location" component={Location} />
        <PrivateRoute path="/transaction" component={Transactions} />
          </Switch>
        </Router>
    </div>
  );
}
export default App;