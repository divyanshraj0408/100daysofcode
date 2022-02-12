import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

function Page() {
  return (
    <div>
      <Header />
      <Footer />
      <MainContent />
    </div>
  );
}
// ReactDOM.render(<Page />, document.getElementById("root"));

export default Page;
