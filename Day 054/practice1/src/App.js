import JokesRender from "./components/JokesRender"
import JokesData from "./JokesData";

function App() {
  const jokeElement = JokesData.map(joke=>{
    return <JokesRender setup = {joke.Setup} punchline = {joke.Punchline} />
  })
  return(
    <div>
      {jokeElement}
    </div>
  )
}

export default App;

