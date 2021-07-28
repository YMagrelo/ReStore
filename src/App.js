import { Route, Switch } from 'react-router-dom';
import './App.css';
import CartPage from './pages/cart-page';
import HomePage from './pages/home-page';

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
}

export default App;
