import './herosection.scss'

function HeroSection() {
    return (
        <div className="herosection">
            <div className="hero__container">
                <div className="hero__left__section">
                    <div className="hero__left__wrapper">
                        <div className="hero__heading">
                            <h2>Delicious</h2>
                            <h1>Pizza</h1>
                        </div>
                        <div className="hero__info">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit repellat alias dolorum quisquam modi totam saepe eligendi exercitationem.
                            </p>
                        </div>
                        <div className="hero__contact">
                            <div className="hero__contact__container">
                                <div className="hero__icon__container">
                                    <img src="./Assets/phone-icon.png"/>
                                </div>
                                <div className="hero__text__container">
                                    <div className="hero__first__text">CALL FOR DELIVERY</div>
                                    <div className="hero__second__text">+1-111-123-456</div>
                                </div>
                            </div>
                            <div className="hero__contact__container">
                                <div className="hero__icon__container">
                                    <img src="./Assets/order-icon.png"/>
                                </div>
                                <div className="hero__text__container">
                                    <div className="hero__first__text">ORDER ONLINE</div>
                                    <div className="hero__second__text">View The Menu</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero__right__section">
                    <img src="./Assets/hero.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
