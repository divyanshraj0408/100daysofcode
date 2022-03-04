import memesData from "../memesData.js";
function Meme() {
  function getMemeImage() {
    const memeImageEl = document.getElementById("memeImage");

    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
   
    memeImageEl.innerHTML = `<img src="${memesArray[randomNumber].url}" alt="" class="memeImage" />`;
    
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={getMemeImage} className="form--button">
          Generate meme 🖼️
        </button>
      </div>

      <div id="memeImage" className="memeImage--div"></div>
    </main>
  );
}
export default Meme;