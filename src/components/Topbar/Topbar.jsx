import { LocalMallOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import './topbar.scss'

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__left__section">
                <div className="topbar__img__container">
                    <img src="./Assets/logo.png" alt="" className="logo" />
                </div>
                <div className="topbar__left__navbar">
                    <ul>
                        <li> <a href=""> HOME</a></li>
                        <li> <a href="">  MENU</a></li>
                        <li> <a href="">  TRACK ORDER</a></li>
                        <li> <a href="">  MY ACCOUNT</a></li>
                    </ul>
                </div>
            </div>
            <div className="topbar__right__section">
                <div className="topbar__cart">
                    <Badge badgeContent={4} color ="primary">
                        <LocalMallOutlined  style={{ fontSize: 35, color: "#fecd1a" }}></LocalMallOutlined>
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Topbar
