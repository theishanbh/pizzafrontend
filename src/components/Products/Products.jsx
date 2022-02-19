import './products.scss';
import Footer from '../Footer/Footer';
import Topbar from '../Topbar/Topbar';
import Product from '../Product/Product';
import { products } from '../../data/pizzas';

function Products() {
  return (
    <div className="products">
      <div className="products__wrapper">
      {
        products.map((item) => (
          <Product item={item} key={item.id}></Product>
        ))
      }
      </div>
    </div>
  );
}

export default Products;