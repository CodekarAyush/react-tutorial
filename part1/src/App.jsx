
import './App.css'
import CounterProject from './components/counters/Counter'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Card from './components/props/Card'
import BgColor from './components/color changer/BgColor'
import Password from './components/password generator/Password'
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/counter' element={<CounterProject/>}/>
<Route path='/card' element={<Card/>}/>
<Route path='/bg-color' element={<BgColor/>}/>
<Route path='/bg-color' element={<Password/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
  