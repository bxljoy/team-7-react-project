import { useContext } from 'react';
import CardItem from '../components/CardItem';
import { BookContext } from '../hooks/bookContext';
import { CartContext } from '../hooks/CartContext';
import noImage from '../assets/No-Image-Placeholder.png';

const Homepage = ({ category }) => {
  const { books } = useContext(BookContext);
  const { addItem } = useContext(CartContext);

  const handleAddItemToCart = (item) => {
    addItem(item);
  };

  return (
    <div className='container p-2'>
      {category && (
        <div className='p-3'>
          <h5 style={{ paddingLeft: '5%' }}>{`Category > ${category}`}</h5>
        </div>
      )}
      <div className='d-flex row justify-content-center align-items-center g-3'>
        {books.map((book) => (
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
            addToCart={() => {
              handleAddItemToCart(book);
            }}
            isForSale={book?.saleInfo?.listPrice !== undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
