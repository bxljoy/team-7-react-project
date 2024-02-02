import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../hooks/themeContext';
import CartPopUpToBuy from './CartPopUpToBuy';
import CartPopUptoLoan from './CartPopUptoLoan';

const CartPopUp = ({ isOpen, closeCart }) => {
  const cartRef = useRef(null);
  const { bgColorClass, textColorClass } = useContext(ThemeContext);

  const cartStyle = {
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.9s ease-in-out',
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      closeCart();
    }
  };

  return (
    <div
      ref={cartRef}
      className={`position-fixed shadow end-0 ${bgColorClass} ${textColorClass}`}
      style={{ width: '33rem', ...cartStyle, zIndex: 1050 }}
    >
      <CartPopUpToBuy closeCart={closeCart} />
      <CartPopUptoLoan />
    </div>
  );
};

export default CartPopUp;
