import logoFaceBook from "../images/FacebookIcon.png"
import logoGitHub from "../images/GitHub Icon.png"
import logoTwitter from "../images/Twitter Icon.png"
import logoLinkeIn from "../images/Linkedin Icon.png"
function footer(){
    return(
        <div className="footer">
            <a href="https://www.github.com/divyanshraj0408" target = "_blank"><img src={logoGitHub} alt=""className="logo"/></a>
            <a href="https://www.twitter.com/divyanshraj04" target = "_blank"><img src={logoTwitter} alt="" className="logo"/></a>
            <a href="https://www.linkedin.com/in/divyansh-raj/" target = "_blank"><img src={logoLinkeIn} alt=""className="logo" /></a>
        </div>
    )
}
export default footer;