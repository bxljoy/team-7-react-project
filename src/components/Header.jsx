import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsHandbag, BsBrightnessHigh, BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../hooks/themeContext';
import { CartContext } from '../hooks/cartContext';
import { LoanCartContext } from '../hooks/loanCartContext';
import { CartPopUpContext } from '../hooks/cartPopUpContext';
import { CategoryContext } from '../hooks/categoryContext';
import { FilterContext } from '../hooks/filterContext';
import useBookContext from '../hooks/useBookContext';

const Header = () => {
  const { fetchBooksByCategory } = useBookContext();
  const [bookSearch, setBookSearch] = useState('');
  const { darkMode, darkModeHandle, textColorClass, bgHeaderColorClass } =
    useContext(ThemeContext);
  const { purchasedItems } = useContext(CartContext);
  const { loanedItems } = useContext(LoanCartContext);
  const { pathname } = useLocation();
  const { toggleCart } = useContext(CartPopUpContext);
  const { setCategory } = useContext(CategoryContext);
  const { setFilter } = useContext(FilterContext);

  const itemsTotalQuantity = purchasedItems?.length + loanedItems?.length;

  const handleInputChange = (e) => {
    setBookSearch(e.target.value);
  };

  const handleSearchBook = (e) => {
    e.preventDefault();
    fetchBooksByCategory(bookSearch, '');
  };

  const handleCategorySelect = (category) => {
    fetchBooksByCategory('', category);
    setCategory(category);
  };

  const handleFilterSelect = (filter) => {
    setFilter(filter);
  };

  const handleHomeClick = () => {
    fetchBooksByCategory('', '');
    setCategory('');
  };

  const shouldShowSearchForm = pathname !== '/contact';

  return (
    <header className={`mb-4 border-bottom ${bgHeaderColorClass}`}>
      <nav className={'navbar navbar-expand-md'}>
        <div className='container-fluid'>
          <Link to='/.' className='navbar-brand' onClick={handleHomeClick}>
            HI Library
          </Link>

          <div>
            <div className='d-md-none d-block d-flex   justify-content-end'>
              <div className='p-2 mx-4 d-flex flex-row  justify-content-end gap-4 align-items-center'>
                <div className='d-md-none d-block'>
                  <Link to='./checkout'>
                    <BsHandbag size={24} />
                  </Link>
                </div>

                {darkMode ? (
                  <BsBrightnessHigh
                    className='text-white'
                    onClick={darkModeHandle}
                  />
                ) : (
                  <BsFillMoonFill onClick={darkModeHandle} size={20} />
                )}
              </div>

              <button
                className='navbar-toggler '
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
            </div>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-lg-0'>
                <li className='nav-item'>
                  <Link
                    to='./'
                    className='nav-link active'
                    onClick={handleHomeClick}
                  >
                    Home
                  </Link>
                </li>

                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Catalog
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleCategorySelect('')}
                        className='dropdown-item'
                      >
                        All books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleCategorySelect('Adventure')}
                        className='dropdown-item'
                      >
                        Adventure
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleCategorySelect('Biography')}
                        className='dropdown-item'
                      >
                        Biography
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleCategorySelect('Classics')}
                        className='dropdown-item'
                      >
                        Classics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleCategorySelect('Fantasy')}
                        className='dropdown-item'
                      >
                        Fantasy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleCategorySelect('Fiction')}
                        className='dropdown-item'
                      >
                        Fiction
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleCategorySelect('Horror')}
                        className='dropdown-item'
                      >
                        Horror
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleCategorySelect('History')}
                        className='dropdown-item'
                      >
                        History
                      </Link>
                    </li>

                    <li>
                      <Link
                        to='./'
                        onClick={() => handleCategorySelect('Mystery')}
                        className='dropdown-item'
                      >
                        Mystery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleCategorySelect('Romance')}
                        className='dropdown-item'
                      >
                        Romance
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleCategorySelect('Science fiction')}
                        className='dropdown-item'
                      >
                        Science fiction
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleCategorySelect('Thriller')}
                        className='dropdown-item'
                      >
                        Thriller
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Filter
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleFilterSelect('ALL')}
                        className='dropdown-item'
                      >
                        all books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleFilterSelect('BUY')}
                        className='dropdown-item'
                      >
                        to buy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='./'
                        onClick={() => handleFilterSelect('LOAN')}
                        className='dropdown-item'
                      >
                        to loan
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <Link to='/contact' className='nav-link'>
                    Contact
                  </Link>
                </li>
                <li className='d-md-none d-block'>
                  <Link to='/checkout' className='nav-link'>
                    Cart
                  </Link>
                </li>
              </ul>

              {/* <div className={`d-md-block d-none px-4 ${textColorClass}`}>
                <Link
                  to='./checkout'
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCart();
                  }}
                >
                  <BsHandbag size={24} />
                </Link>
                &nbsp;
                <span style={{ fontSize: '1.2rem' }}>{itemsTotalQuantity}</span>
              </div> */}

              <div className='d-md-block d-none px-3'>
                {darkMode ? (
                  <BsBrightnessHigh
                    className='text-white'
                    onClick={darkModeHandle}
                  />
                ) : (
                  <BsFillMoonFill onClick={darkModeHandle} />
                )}
              </div>

              {shouldShowSearchForm && (
                <form className='d-flex' role='search'>
                  <input
                    data-bs-theme={darkMode ? 'dark' : 'light'}
                    className='form-control me-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                    onChange={handleInputChange}
                  />
                  <button
                    onClick={handleSearchBook}
                    className='btn btn-secondary'
                    type='submit'
                  >
                    Search
                  </button>
                </form>
              )}
              <div className={`d-md-block d-none px-4 ${textColorClass}`}>
                <Link
                  to='./checkout'
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCart();
                  }}
                >
                  <BsHandbag size={24} />
                </Link>
                &nbsp;
                <span style={{ fontSize: '1.2rem' }}>{itemsTotalQuantity}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
