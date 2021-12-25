import './exclusivedeals.scss'
import { deals } from '../../data/deals'

function ExclusiveDeals() {
    return (
        <div className="exclusivedeals">
            <div className="deal__wrapper">
                <div className="deal__heading">
                    <h2 className="heading__exclusive">EXCLUSIVE</h2>
                    <h2 className="heading__deals">DEALS</h2>
                </div>
                <div className="deal__containers">
                    {
                        deals.map(x =>
                            <div className="deal__container">
                                <div className="deal__box">
                                    <a href={x.link}>
                                        <img src={x.img} alt="" />
                                        <div className="deal__containers__heading">
                                            <h2>{x.heading}</h2>
                                        </div>
                                    </a>
                                </div>
                                <div className="deal__info">
                                    <p>{x.details}</p>
                                </div>
                            </div>
                        )
                    }
                    {/* <div className="deal__container">
                        <div className="deal__box">
                            <a href="">
                                <img src="" alt="" />
                                <div className="deal__containers__heading"></div>
                            </a>
                        </div>
                        <div className="deal__info">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, quidem.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ExclusiveDeals
