import './filters.scss'

const Filters = () => {
    return (
        <div className="filters">
            <div className="filters__wrapper">
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
                <h1 className="filter__title">CATEGORIES</h1>
                <div className="filter__container">
                    <div className="filter">
                        <select className="select__filter">
                            <option selected>Newest</option>
                            <option>Price (asc)</option>
                            <option>Price (dec)</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters
