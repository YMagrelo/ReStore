import { Component } from 'react';

import './book-list.css';
import BookListItem from '../book-list-item/book-list-item';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/with-bookstore-service';
import { fetchBooks } from '../../actions/index';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return <BookListItem key={book.id} book={book} />;
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }
  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} />;
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer),
);
