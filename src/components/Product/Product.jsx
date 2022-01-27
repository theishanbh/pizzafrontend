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
                    <FavoriteBorderOutlined className="product__action__icon"></FavoriteBorderOutlined>
                    <ShoppingCartOutlined className="product__action__icon"></ShoppingCartOutlined>
                    <SearchOutlined className="product__action__icon"></SearchOutlined>
                </div>
            </div>
        </div>
    )
}

export default Product