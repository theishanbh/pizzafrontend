import './whyus.scss';

import React from 'react'

function WhyUs() {
    return (
        <div className="whyus">
            <div className="whyus__wrapper">
                <div className="whyus__heading">
                    <div className="whyus__heading__why">
                        <h2>Why</h2>
                    </div>
                    <div className="whyus__heading__us">
                        <h2>us?</h2>
                    </div>
                </div>
                <div className="whyus__containers">
                    <div className="container__box">
                        <div className="img__box__container">
                            <img src="./Assets/WhyUs/time.png" alt="" />
                        </div>
                        <div className="text__box__container">
                            <div className="box__title">
                                <h2>45 Minute Delivery</h2>
                            </div>
                            <div className="box__info">
                                <p>Extra Fast delivery is guaranteed or you willget the order for free.</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="container__box">
                        <div className="img__box__container">
                            <img src="./Assets/WhyUs/food.png" alt="" />
                        </div>
                        <div className="text__box__container">
                            <div className="box__title">
                                <h2>Track Order Online</h2>
                            </div>
                            <div className="box__info">
                                <p>You can track your meal from our exclusive mobile app.</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="container__box">
                        <div className="img__box__container">
                            <img src="./Assets/WhyUs/delivery.png" alt="" />
                        </div>
                        <div className="text__box__container">
                            <div className="box__title">
                                <h2>Cash on Delivery</h2>
                            </div>
                            <div className="box__info">
                                <p>Pay cash at your doorstep after receiving your oreder.</p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
