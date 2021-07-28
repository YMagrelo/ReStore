import BookList from '../components/book-list/book-list';
import ShoppingCartTable from '../components/shopping-cart-table/shopping-cart-table';

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
