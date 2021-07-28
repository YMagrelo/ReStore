import BookList from '../components/book-list/book-list';

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
    },
    {
      id: 2,
      title: 'Realease It!',
      author: 'Michael T.Nygard',
    },
  ];

  return (
    <div>
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
