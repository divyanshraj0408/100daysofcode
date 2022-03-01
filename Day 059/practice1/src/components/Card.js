import MountFugi from "../images/MountFugi.png"
/**
 * A React component that displays a card with an image and text.
 * @returns A React component that displays a card with an image and text.
 */
function Card(props){
    return(
        <div className= "content-cards">

        
        <div className="Card">
            <span className="Image">
            <img src={props.img} alt="Japan Photo" />
            </span>
            <span className="Content">
                <span className="Location">
            <p>{props.location}</p>
            <a href={props.googleMapsUrl} className="location-url" target="blank">View on Google map</a>
            </span>
            <span className="MainContent">
            <h1>{props.title}</h1>
            <h4>{props.startDate} - {props.endDate}</h4>
            <p>
       {props.description}

            </p>
            </span>
            </span>
        </div>
        </div>
    )
}

export default Card;