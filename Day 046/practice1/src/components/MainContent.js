import "../App.css"
function MainContent() {
  return (
    <div className="MainContent">
      <div className="intro">
      <h2>Divyansh Raj</h2>
      <p>Student</p>
      <small>
        <a href="http://linkfree.eddiehub.org/divyanshraj0408" target = "_blank">
          divyanshraj.website
        </a>
      </small>
      </div>
      <br />
      <button className= "main--btn">Email</button>
      <div className="main--about">
      <h4>About</h4>
      <small>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </small>
      </div>
      <div className="main--interests">
      <h4>Intrests</h4>
      <small>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </small>
      </div>
    </div>
  );
}
export default MainContent;
