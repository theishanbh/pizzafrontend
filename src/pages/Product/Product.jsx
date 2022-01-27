import './product.scss'
import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'
import Topbar from '../../components/Topbar/Topbar'
import { Add, Remove } from '@mui/icons-material'

const Product = () => {
    return (
        <div className="product">
            <Topbar></Topbar>
            <div className="product__wrapper">
                <div className="product__img__container">
                    <img src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" alt=""/>
                </div>
                <div className="product__info__container">
                    <h1 className="product__title">title</h1>
                    <p className="product__desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus deleniti molestias sapiente asperiores! Voluptatibus aspernatur molestiae quibusdam a magni ipsam expedita vel reprehenderit nemo accusantium esse, odit, sequi ratione nihil!
                    </p>
                    <span className="product__price">
                        $ 20
                    </span>
                    <div className="filter__container">
                        <div className="filter">
                            <span className="filter__title">Size</span>
                            <select className="select__filter">
                                <option disabled selected>Size</option>
                                <option >Black</option>
                                <option >Red</option>
                                <option >Yellow</option>
                            </select>
                        </div>
                        <div className="filter">
                            <span className="filter__title">Color</span>
                            <div className="filter__color"></div>
                            <div className="filter__color"></div>
                            <div className="filter__color"></div>
                        </div>
                    </div>
                    <div className="add__container">
                        <div className="amount__container">
                            <Add></Add>
                            <span className="amount__number">1</span>
                            <Remove></Remove>
                        </div>
                        <button className="add__button">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default Product
