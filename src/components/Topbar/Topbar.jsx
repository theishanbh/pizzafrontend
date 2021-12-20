import './topbar.scss'

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__left__section">
                <div className="topbar__img__container">
                    <img src="./Assets/logo.png" alt="" className="logo" />
                </div>
            </div>
            <div className="topbar__right__section">
                right
            </div>
        </div>
    )
}

export default Topbar
