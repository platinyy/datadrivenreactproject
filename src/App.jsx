
import './App.css'
import Navbar from './componenets/NavBar'
import Main from './componenets/Main'
import Card from './componenets/card'
import data from './data'

function App() {
const cards = data.map(item => {
  return (
    <Card 
    img={item.coverImg}
    rating={item.stats.rating}
    rewiewCount={item.stats.reviewCount}
    location={item.location}
    title={item.title}
    price={item.price}
    />
  )
})

  return (
   <div>
    <Navbar />
    <Main />
    <section className='cards-list'>
    {cards}
    </section>
   </div>
  )
}

export default App
