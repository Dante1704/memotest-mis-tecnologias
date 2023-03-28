import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Memotest from './Components/Memotest'
import Scores from './Components/Scores'

function App (): JSX.Element {
  return (
    <Routes>
      <Route element={<Home/>} path={'/'}/>
      <Route element={<Memotest/>} path={'/memotest'}/>
      <Route element={<Scores/>} path={'/scores'}/>
    </Routes>
  )
}

export default App
