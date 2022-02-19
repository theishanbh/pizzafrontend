import './product.scss'
import { Circle, FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'

const Product = ({item}) => {
    return (
        <div className="product">
            <div className="product__wrapper">
                <div className="product__img">
                    <img src={item.img} alt="hello"/>
                </div>
                <div className="product__info">
                    <span className="product__info__name">Delight Pizza</span>
                    <span className="product__info__price">$4.99</span>
                    <button className="product__info__add__options__button">ADD OPTIONS</button>
                </div>
                {/* <div className="product__info">
                    <FavoriteBorderOutlined className="product__action__icon"></FavoriteBorderOutlined>
                    <ShoppingCartOutlined className="product__action__icon"></ShoppingCartOutlined>
                    <SearchOutlined className="product__action__icon"></SearchOutlined>
                </div> */}
            </div>
        </div>
    )
}

export default Product