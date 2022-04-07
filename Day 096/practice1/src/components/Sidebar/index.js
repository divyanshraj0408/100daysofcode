import "./index.scss"
import {Link} from "react-router-dom"
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"
const Sidebar = () => {
    <div className = "nav-bar">
        <Link className="logo" to="/">
            hello
        <img src={LogoS}/>
        <img src={LogoSubtitle}/>
        </Link>

    </div>
}

export default Sidebar