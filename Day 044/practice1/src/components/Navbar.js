import logo from "../images/logo512.png"
function Navbar(){
    return(
        <nav className="nav">
            <img src={logo} />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}
export default Navbar