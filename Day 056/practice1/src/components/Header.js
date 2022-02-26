import logo from "../images/Globe.png";
function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="" className="header--image"/>
      <p>my travel journal</p>
    </div>
  );
}
export default Header;
