import getTechnologies from '../helpers/getTechnologies'

const technologies: string[] = getTechnologies()

function Memotest (): JSX.Element {
  return (
    <main className='h-[100vh] flex justify-center items-center'>
      <ul className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 max-w-[1200px] gap-10'>
      { technologies.map((tech) => {
        return (
          <li key={tech} className="flex justify-center items-center min-w-14">
            <div >
              <img src={tech} className="w-12 h-12 sm:w-24 h-24"/>
              <img src={tech} className="w-12 h-12 sm:w-24 h-24"/>
            </div>
          </li>
        )
      })}
      </ul>
    </main>
  )
}

export default Memotest
