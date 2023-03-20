import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Memotest from './Components/Memotest'

function App (): JSX.Element {
  return (
    <Routes>
      <Route element={<Home/>} path={'/'}/>
      <Route element={<Memotest/>} path={'/memotest'}/>
    </Routes>

  )
}

export default App
