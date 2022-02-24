import JokesData from "../JokesData";
function JokesRender(props){
    
    return(
        <div>
        {props.setup && <h3>Setup: {props.setup}</h3>}
        <p>Punchline : {props.punchline}</p>
        <hr/>
        </div>
    )
}
export default JokesRender;