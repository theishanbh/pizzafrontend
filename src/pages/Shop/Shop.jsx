import Footer from '../../components/Footer/Footer';
import Products from '../../components/Products/Products';
import Topbar from '../../components/Topbar/Topbar';
import Newsletter from '../../components/Newsletter/Newsletter';
import Filters from '../../components/Filters/Filters';
import "./shop.scss";

function Shop() {
  return (
    <div className="shop">
      <Topbar/>
      <div className="shop__wrapper">
        <h1 className="shop__heading">PRODUCTS</h1>
      </div>
      <Filters/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Shop;
