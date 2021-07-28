import { Route, Switch } from 'react-router-dom';
import './App.css';
import ShopHeader from './components/header/shop-header';
import CartPage from './pages/cart-page';
import HomePage from './pages/home-page';

function App() {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
}

export default App;
