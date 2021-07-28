import { Component } from 'react';

import './book-list.css';
import BookListItem from '../book-list-item/book-list-item';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/with-bookstore-service';
import { booksLoaded } from '../../actions/index';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    this.props.booksLoaded(data);
  }
  render() {
    const { books } = this.props;

    return (
      <ul className="book-list">
        {books.map((book) => {
          return <BookListItem key={book.id} book={book} />;
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return {
    books: books,
  };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList),
);
