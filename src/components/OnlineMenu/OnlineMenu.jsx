import './onlinemenu.scss'

function OnlineMenu() {
    return (
        <div className="onlinemenu">
            <div className="onlinemenu__wrapper">
                <div className="menu__wrapper__background">
                    <img src="./Assets/menu-bg.jpg" alt="" />
                </div>
                <div className="info__wrapper">
                    <div className="onlinemenu__heading">
                        <div className="onlinemenu__heading__exclusive">
                            <h2>Exclusive</h2>
                        </div>
                        <div className="onlinemenu__heading__onlinemenu">
                            <h2>ONLINE MENU</h2>
                        </div>
                    </div>
                    <div className="menu__tabs">
                        <div className="menu__tabs__navbar">
                            <button> pizza </button>
                            <button> deals </button>
                            <button> sides </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnlineMenu
