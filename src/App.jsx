import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Shop from './pages/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  const user = true
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/menu">
          <Shop></Shop>
        </Route>
        <Route path="/product/:id">
          <ProductPage></ProductPage>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/"/> : <Register/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
