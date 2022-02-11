import Header from "./Header.js"

function Footer() {
  return (
    <footer className="footer">
      <small>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
        animi!
      </small>
    </footer>
  );
}
function MainContent() {
  return (
    <div>
      <h1>Reasons I am excited about learning React</h1>
      <ol>
        <li>I love react because it is good</li>
        <li>I want to become a react developer</li>
      </ol>
    </div>
  );
}
function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById("root"));
