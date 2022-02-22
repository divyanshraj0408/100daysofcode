import Group77 from "../images/Group77.png"
function Hero(){
    return(
        <section className="Hero-component">
            <img src={Group77} alt="" className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
export default Hero;