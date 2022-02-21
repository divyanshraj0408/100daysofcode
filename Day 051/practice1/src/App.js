import JokesRender from "./components/JokesRender"

function App() {
  return (
    <div className="App">
      <JokesRender
      Setup = "I got my daughter a fridge for her birthday."
      Punchline = "I can't wait to see her face light up when she opens it."
      />
      <JokesRender
      Setup = "How did the hacker escape the police?"
      Punchline = "He just ransomware!"
      />
      <JokesRender
      Setup = "Why don't pirates travel on mountain roads?"
      Punchline = "Scurvy"
      />
      <JokesRender
      Setup = "Why do bees stay in the hive in the winter?"
      Punchline = "Swarm"
      />
    </div>
  );
}

export default App;
