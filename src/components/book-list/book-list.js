import { Component } from 'react';

import './book-list.css';
import BookListItem from '../book-list-item/book-list-item';

export default class BookList extends Component {
  render() {
    const { books } = this.props;

    return (
      <ul>
        {books.map((book) => {
          return <BookListItem key={book.id} book={book} />;
        })}
      </ul>
    );
  }
}
