import { Component } from 'react';

import './book-list.css';
import BookListItem from '../book-list-item/book-list-item';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/with-bookstore-service';
import { booksLoaded } from '../../actions/index';
import Spinner from '../spinner/spinner';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    bookstoreService.getBooks().then((data) => {
      booksLoaded(data);
    });
  }
  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <ul className="book-list">
        {books.map((book) => {
          return <BookListItem key={book.id} book={book} />;
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => {
  return {
    books,
    loading,
  };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList),
);
