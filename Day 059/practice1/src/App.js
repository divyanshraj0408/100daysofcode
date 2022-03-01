import './App.css';
import Header from "./components/Header";
import Card from './components/Card';
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.imageUrl}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        title={item.title}
        endDate={item.endDate}
        description={item.description}
      />
      
    );
  });
  return (
    
    <div className="App">
     <Header />
     <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;