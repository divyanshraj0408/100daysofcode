import React from "react"
import logo1 from "./images/star-empty.png"
import logo2 from "./images/star-filled.png"
import logo3 from "./images/user.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    let starIcon = contact.isFavorite? logo2:logo1
    
    function toggleFavorite() {
        setContact(prevContact => {
          return{
            ...prevContact,
            isFavorite: !prevContact.isFavorite 
          }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src={logo3} className="card--image" />
                <div className="card--info">
                    <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}