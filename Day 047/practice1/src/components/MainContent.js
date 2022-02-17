import "../App.css"
function MainContent() {
  return (
    <div className="MainContent">
      <div className="intro">
      <h2>Divyansh Raj</h2>
      <p>Frontend Engineer</p>
      <small>
        <a href="http://linkfree.eddiehub.org/divyanshraj0408" target = "_blank" className="website">
          divyanshraj.website
        </a>
      </small>
      </div>
      <br />
      <div className="btn-email">
      <a className="LinkedIn-btn" href= "mailto:divyanshraj0408@gmail.com" target="_blank"></a>
      </div>
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
