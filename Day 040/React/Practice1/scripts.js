function Header() {
  return (
    <header>
      <nav>
        <img src="./logo512.png" alt="" width="40px" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>Menu</li>
          <li>Contact us</li>
        </ul>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer>
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
      <h1>Why I love react</h1>
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
