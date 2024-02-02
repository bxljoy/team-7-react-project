import Header from './Header';
import Footer from './Footer';

const PagesContainer = ({ children }) => {
  return (
    <div className='vh-100 d-flex flex-column justify-content-between'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default PagesContainer;
