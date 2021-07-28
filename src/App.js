import './App.css';
import withBookstoreService from './components/hoc/with-bookstore-service';
function App({ bookstoreService }) {
  console.log(bookstoreService.getBooks());
  return <div>App</div>;
}

export default withBookstoreService()(App);
