
import './App.css'
import Nav from './components/NavBar/Nav'
import PriceOption from './components/PriceOption/PriceOption'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
     
      <Nav></Nav>
       {/* <DaisyNav></DaisyNav> */}
      <h1 className='bg-green-600 text-6xl'>Vite + React</h1>
      <PriceOption></PriceOption>
      
      
    </>
  )
}

export default App
