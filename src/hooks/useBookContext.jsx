import { useContext } from 'react';
import { BookContext } from './bookContext';

const useBookContext = () => {
    const bookContext = useContext(BookContext);
    if (!bookContext.books) {
      throw new Error('books is null!');
    }
    return bookContext;
  }

export default useBookContext;