import { useEffect, useState } from 'react'
import './filters.scss'

const Filters = () => {
    const minGap = 0;
    const [leftSlider, setLeftSlider] = useState(0);
    const [rightSlider, setRightSlider] = useState(100);

    useEffect(() => {
      if(parseInt(leftSlider) - parseInt(rightSlider) >= minGap){
          setLeftSlider(rightSlider - minGap)
      }
    }, [leftSlider, rightSlider]);
    

    return (
        <div className="filters">
            <div className="filters__wrapper">
                <div className="filter__category">
                    <h1 className="filter__title">CATEGORIES</h1>
                    <div className="filter__container">
                        <div className="filter">
                            <select className="select__filter">
                                <option selected>Any</option>
                                <option> Deals</option>
                                <option> Pizza</option>
                                <option> Sides</option>
                            </select>
                        </div>
                        {/* <div className="filter">
                            <span className="filter__text">Sort Products: </span>
                            <select className="select__filter">
                                <option selected>Newest</option>
                                <option>Price (asc)</option>
                                <option>Price (dec)</option>
                            </select>
                        </div> */}
                    </div>
                </div>
                <div className="filter__price">
                    <h1 className="filter__title">PRICE</h1>
                    <div className="filter__container">
                        <div className="filter__wrapper">
                            <span className="min__price">$ {`${leftSlider}`}.00</span>
                            <span className="max__price">$ {`${rightSlider}`}.00</span>
                            <div className="slider_track"></div>
                            <input 
                                type="range" 
                                min="0" 
                                max="100" 
                                id="slider-1"
                                value={leftSlider}
                                onChange = { (e) => {
                                    setLeftSlider(e.target.value)
                                }}
                            />
                            <input 
                                type="range" 
                                min="0" 
                                max="100" 
                                id="slider-2"
                                value={rightSlider}
                                onChange = { (e) => {
                                    setRightSlider(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters

{/* <select className="select__filter">
    <option selected>Newest</option>
    <option>Price (asc)</option>
    <option>Price (dec)</option>
</select> */}