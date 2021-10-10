import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Context/AuthProvider';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Loogin from './components/Loogin/Loogin';

import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivetRoute from './components/PrivetRote/PrivetRoute';
import Register from './components/register/Register';

import Shop from './components/Shop/Shop';


function App() {
  return (
    <div>

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <PrivetRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivetRoute>
            <Route path="/login">
              <Loogin></Loogin>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
