import Contact from "../src/components/Contacts"
import img1 from "../src/images/mr-whiskerson.png"
import img2 from "../src/images/fluffykins.png"
import img3 from "../src/images/felix.png"
import img4 from "../src/images/pumpkin.png"
function App() {
  return (
      <div className="contacts">
         <Contact 
                img={img1}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={img2}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={img3}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={img4}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
      </div>
  )
}

export default App
