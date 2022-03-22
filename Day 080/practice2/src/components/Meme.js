import React from "react";
import memesData from "../memesData.js";

function Meme() {
  // const [memeImage, setMemeImage] = React.useState(
  //   "https://i.imgflip.com/1g8my4.jpg"
  // );

  const [meme,setMeme] = React.useState({
    topText :"",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg"
  })
  const [allMemeImages,setAllMemeImages] = React.useState(memesData)
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url =memesArray[randomNumber].url 
    setMeme(prevMeme=>{
      return{
      ...prevMeme,
      randomImage : url
      }
    });
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

      <div id="memeImage" className="memeImage--div">
        <img src={meme.randomImage} alt="" className="memeImage" />
      </div>
    </main>
  );
}
export default Meme;
