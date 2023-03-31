import { Link } from 'react-router-dom'

function Home (): JSX.Element {
  return (

      <main className="min-h-screen flex flex-col items-center justify-center gap-16">
        <div className='flex gap-1'>
          <h1 className='font-bold text-lg sm:text-2xl md:text-3xl'>MEMOTEST MIS TECNOLOGIAS</h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="mouse" className='w-5 sm:w-7 invert'>
            <path d="M52.86,3.5H47.14A25.31,25.31,0,0,0,21.86,28.79V71.21A25.31,25.31,0,0,0,47.14,96.5h5.72A25.31,25.31,0,0,0,78.14,71.21V28.79A25.31,25.31,0,0,0,52.86,3.5ZM51.5,17.21a3.49,3.49,0,0,1,2,3.15V34.73a3.49,3.49,0,0,1-2,3.15,3.39,3.39,0,0,1-3,0,3.49,3.49,0,0,1-2-3.15V20.36a3.49,3.49,0,0,1,2-3.15,3.39,3.39,0,0,1,3,0ZM24.86,28.79A22.31,22.31,0,0,1,47.14,6.5H48.5V14a6.51,6.51,0,0,0-5,6.32V34.73a6.51,6.51,0,0,0,5,6.32V48.5H24.86ZM75.14,71.21A22.31,22.31,0,0,1,52.86,93.5H47.14A22.31,22.31,0,0,1,24.86,71.21V51.5H49.65a1.55,1.55,0,0,0,.7,0H75.14Zm0-22.71H51.5V41.05a6.51,6.51,0,0,0,5-6.32V20.36a6.51,6.51,0,0,0-5-6.32V6.5h1.36A22.31,22.31,0,0,1,75.14,28.79Z" data-name="1"></path>
          </svg>
        </div>
        <div className='rounded border-2 flex flex-col justify-center items-center p-8 gap-10'>
          <span>Apagá por un ratito el chip laboral y jugá al memotest con las tecnologías con las que trabajo!</span>
          <p>Liderá la grilla de scores por menor cantidad de errores!</p>
          <Link to={'/memotest'} className="btn btn-outline btn-accent w-[300px]">A Jugar!</Link>
        </div>
      </main>

  )
}

export default Home
