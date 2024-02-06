import { useContext } from 'react';
import CardItem from '../components/CardItem';
import { CartContext } from '../hooks/cartContext';
import { LoanCartContext } from '../hooks/loanCartContext';
import { FilterContext } from '../hooks/filterContext';
import SpinnerComponent from './SpinnerComponent';
import noImage from '../assets/No-Image-Placeholder.png';
import useBookContext from '../hooks/useBookContext';

const ListCardItems = () => {
  const { books, isLoading } = useBookContext();
  const { buyItem } = useContext(CartContext);
  const { loanItem } = useContext(LoanCartContext);
  const { filter } = useContext(FilterContext);

  const filteredBooks = books.filter((book) => {
    if (filter === 'ALL') {
      return true;
    } else if (filter === 'LOAN') {
      return book?.saleInfo?.listPrice === undefined;
    } else if (filter === 'BUY') {
      return book?.saleInfo?.listPrice !== undefined;
    }
    return false;
  });

  return (
    <>
      {isLoading && <SpinnerComponent />}
      {!isLoading && filteredBooks.length === 0 && (
        <div className='d-flex justify-content-center'>
          <h3>No books found for this filter</h3>
        </div>
      )}
      {filteredBooks.map((book) => {
        return (
          <CardItem
            key={book.id}
            image={book.volumeInfo.imageLinks.thumbnail ?? noImage}
            title={book.volumeInfo.title}
            id={book.id}
            price={
              book.saleInfo.listPrice
                ? book.saleInfo.listPrice.amount
                : 'No Price'
            }
            currency={
              book.saleInfo.listPrice
                ? book.saleInfo.listPrice.currencyCode
                : ''
            }
            addToBuy={() => {
              buyItem(book);
            }}
            addToLoan={() => {
              loanItem(book);
            }}
            isForSale={book?.saleInfo?.listPrice !== undefined}
          />
        );
      })}
    </>
  );
};

export default ListCardItems;
