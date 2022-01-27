import { Send } from '@mui/icons-material'
import './newsletter.scss'

const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="newsletter__container">
                <h1 className="newsletter__title">
                    Newsletter
                </h1>
                <p className="newsletter__desc">
                    Get timely updates from your favorite products.
                </p>
                <div className="newsletter__input__container">
                    <input placeholder="Your email"/>
                    <button>
                        <Send className="send__icon"></Send>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter