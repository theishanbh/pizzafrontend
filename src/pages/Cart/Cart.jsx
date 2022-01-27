import './cart.scss'
import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'
import Topbar from '../../components/Topbar/Topbar'
import { Add, Remove } from '@mui/icons-material'

const Cart = () => {
    return (
        <div className="cart">
            <Topbar></Topbar>
            <div className="cart__wrapper">
                <h1 className="cart__title">YOUR BAG</h1>
                <div className="top__cart">
                    <button className="cart__topbutton cart__continue__shopping">
                        CONTINUE SHOPPING
                    </button>
                    <div className="cart__toptexts">
                        <span className="cart__toptext">Shopping Bag(2)</span>
                        <span className="cart__toptext">Your Wishlist(0)</span>
                    </div>
                    <button className="cart__topbutton cart__checkout__now">
                        CHECKOUT NOW
                    </button>
                </div>
                <div className="bottom__cart">
                    <div className="cart__bottom__info">
                        <div className="cart__bottom__info__product">
                            <img src="https://pngimg.com/uploads/pizza/pizza_PNG44093.png" alt="" height="16" width="16"/>
                            <div className="cart__bottom__info__product__details">
                                <span className="cart__bottom__info__product__details__name"> <b>Product:</b> JESSIE THUNDER SHOES </span>
                                <span className="cart__bottom__info__product__details__id"><b>ID:</b> 9381784987987 </span>
                                <div className="cart__bottom__info__product__details__color"></div>
                                <span className="cart__bottom__info__product__details__size"><b>Size:</b> 37.5</span>
                            </div>
                            <div className="cart__bottom__info__price__details">
                                <div className="cart__bottom__info__price__details__product__amount__container">
                                    <Add></Add>
                                    <div className="cart__bottom__info__price__details__product__amount">
                                        2
                                    </div>
                                    <Remove></Remove>
                                </div>
                                <div className="cart__bottom__info__price__details__product__price">
                                    $ 30
                                </div>
                            </div>
                        </div>
                        <hr className="product__hr"/>
                        <div className="cart__bottom__info__product">
                            <img src="https://freepngimg.com/thumb/pizza/35117-7-pepperoni-pizza-transparent.png" alt="" height="16" width="16"/>
                            <div className="cart__bottom__info__product__details">
                                <span className="cart__bottom__info__product__details__name"> <b>Product:</b> JESSIE THUNDER SHOES </span>
                                <span className="cart__bottom__info__product__details__id"><b>ID:</b> 9381784987987 </span>
                                <div className="cart__bottom__info__product__details__color"></div>
                                <span className="cart__bottom__info__product__details__size"><b>Size:</b> 37.5</span>
                            </div>
                            <div className="cart__bottom__info__price__details">
                                <div className="cart__bottom__info__price__details__product__amount__container">
                                    <Add></Add>
                                    <div className="cart__bottom__info__price__details__product__amount">
                                        2
                                    </div>
                                    <Remove></Remove>
                                </div>
                                <div className="cart__bottom__info__price__details__product__price">
                                    $ 30
                                </div>
                            </div>
                        </div>
                        <div className="cart__bottom__info__price">price</div>
                    </div>
                    <div className="cart__bottom__summary">
                        <h1 className="cart__bottom__summary__title">ORDER SUMMARY</h1>
                        <div className="cart__bottom__summary__item">
                            <span className="cart__bottom__summary__item__text">Subtotal</span>
                            <span className="cart__bottom__summary__item__price">$ 80</span>
                        </div>
                        <div className="cart__bottom__summary__item">
                            <span className="cart__bottom__summary__item__text">Shipping </span>
                            <span className="cart__bottom__summary__item__price">$ 5</span>
                        </div>
                        <div className="cart__bottom__summary__item">
                            <span className="cart__bottom__summary__item__text">Shipping Discount</span>
                            <span className="cart__bottom__summary__item__price">$ -5</span>
                        </div>
                        <div className="cart__bottom__summary__item total__price">
                            <span className="cart__bottom__summary__item__text total__price">Total</span>
                            <span className="cart__bottom__summary__item__price total__price">$ 100</span>
                        </div>
                        <button className="cart__bottom__summary__button">CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default Cart
