import './footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__left">
                    <div className="text__trademark">
                        © 2021 Pizza Shop
                    </div>
                </div>
                <div className="footer__middle">
                    <div className="footer__logo__container">
                        <a href="https://instagram.com">
                            <img src="https://img.icons8.com/material-outlined/48/000000/instagram-new--v1.png"/>    
                        </a>
                    </div>
                    <div className="footer__logo__container">
                        <a href="">
                            <img src="https://img.icons8.com/material-outlined/48/000000/facebook-new.png"/>    
                        </a>
                    </div>
                    <div className="footer__logo__container">
                        <a href="">
                            <img src="https://img.icons8.com/ios/48/000000/twitter--v1.png"/>    
                        </a>
                    </div>                    
                </div>
                <div className="footer__right">
                    <div className="footer__right__menu">
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
