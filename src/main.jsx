import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import BookProvider from './hooks/bookContext';
import ThemeProvider from './hooks/themeContext';
import CartProvider from './hooks/cartContext';
import LoanCartProvider from './hooks/loanCartContext';
import CartPopUpProvider from './hooks/cartPopUpContext';
import CategoryProvider from './hooks/categoryContext';
import FilterProvider from './hooks/filterContext';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import '@smastrom/react-rating/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CategoryProvider>
        <FilterProvider>
          <BookProvider>
            <CartProvider>
              <LoanCartProvider>
                <CartPopUpProvider>
                  <App />
                </CartPopUpProvider>
              </LoanCartProvider>
            </CartProvider>
          </BookProvider>
        </FilterProvider>
      </CategoryProvider>
    </ThemeProvider>
  </React.StrictMode>
);
