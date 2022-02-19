import './productpage.scss'
import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'
import Topbar from '../../components/Topbar/Topbar'
import { Add, Remove } from '@mui/icons-material'

const ProductPage = () => {
    return (
        <div className="product__page">
            <Topbar></Topbar>
            <div className="product__page__wrapper">
                <div className="product__page__summary">
                    <div className="product__image__container">
                        <img src="	https://wpactuts.com/websites/pizza-shop/wp-content/uploads/2021/06/pizza-2.jpg" alt="pizza" />
                    </div>
                    <div className="product__summary__container">
                        <span className="product__summary__title">SIZZLING FAJITA</span>
                        <p className="product__summary__info">A sizzling and mouth-watering experience with spicy chicken, olives, mushrooms, and veggies.</p>
                        <span className="product__summary__price">Starting from $4.99</span>
                    </div>
                </div>
                <div className="product__page__options">
                    <div className="product__page__size">
                        <div className="product__page__size__heading__container">
                        1. CHOOSE YOUR SIZE
                            {/* <h1 className="product__page__size__heading">1. CHOOSE YOUR SIZE</h1> */}
                        </div>
                        <div className="product__page__size__options__container">
                            <div className="product__page__size__option">
                                <p>Small</p>
                            </div>
                            <div className="product__page__size__option">
                                <p>Medium</p>
                            </div>
                            <div className="product__page__size__option">
                                <p>Large</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="product__page__wrapper">
                <div className="product__page__img__container">
                    <img src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" alt=""/>
                </div>
                <div className="product__page__info__container">
                    <h1 className="product__page__title">title</h1>
                    <p className="product__page__desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus deleniti molestias sapiente asperiores! Voluptatibus aspernatur molestiae quibusdam a magni ipsam expedita vel reprehenderit nemo accusantium esse, odit, sequi ratione nihil!
                    </p>
                    <span className="product__page__price">
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
            </div> */}
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default ProductPage
