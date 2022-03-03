function Form(){
    return(
        <main className="form">
            <input 
            type="text"
            
            placeholder="Top text"
            className="form--input" />
            <input 
            type="text"
            placeholder="Bottom text"
            className="form--input" />
            <button className="form--button">Generate meme</button>
        </main>
    )
}
export default Form