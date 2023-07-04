
import './App.css'
import Navbar from './componenets/NavBar'
import Main from './componenets/Main'
import Card from './componenets/card'
function App() {
  

  return (
   <div>
    <Navbar />
    <Main />
    <Card 
    img="src/image 12.png"
    rating="5.0"
    rewiewCount={6}
    Country="Kosova"
    title="Life Lessons with Katie Zaferes"
    price={136}/>
   </div>
  )
}

export default App
