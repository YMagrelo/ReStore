export const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  };
};

export const booksRequested = () => {
  return {
    type: 'BOOKS_REQUESTED',
  };
};
