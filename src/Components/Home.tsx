import { Link } from 'react-router-dom'

function Home (): JSX.Element {
  return (
     <div className="flex flex-col items-center justify-center">
       <h1 className=''>Memotest mis tecnologías</h1>
       <p>Apaga por un ratito el chip laboral y juega al memotest con las tecnologias con las que trabajo!</p>
       <p>Lidera la grilla por tiempo y por menor cantidad de errores!</p>
       <Link to={'/memotest'}>A Jugar!</Link>
       <Link to={'/scores'}>Ver Mejores Marcas</Link>
     </div>
  )
}

export default Home
