import logo1 from "../images/mr-whiskerson.png";
import logo2 from "../images/phone-icon.png";
import logo3 from "../images/mail-icon.png";

function Contacts(props) {
  console.log(props);
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={logo2} />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={logo3} />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
export default Contacts;
// email: "pumpkin@scrimba.com"
// img: "./images/pumpkin.png"
// name: "Pumpkin"
// phone: "(0800) CAT KING"
