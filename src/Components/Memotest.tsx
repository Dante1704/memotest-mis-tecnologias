import { useState } from 'react'
import getRandomTechnologies from '../helpers/getTechnologies'
import { useGuessed } from '../hooks/useGuessed'
import emoji from '../assets/emoji-confused.png'
import Scores from './Scores'

let technologies: string[] = getRandomTechnologies()

function Memotest (): JSX.Element {
  const [selected, setSelected] = useState<string[]>([])
  const [guessed, setGuessed, mistakes, setMistake] = useGuessed(selected)

  selected.length === 2 && setTimeout(() => { setSelected([]) }, 1000)

  const handleClick = (tech: string): void => {
    // cuando lo clickeo, que vaya a selected
    // si es menor que 2 que agregue sino, no. Las comparaciones son de a 2
    if (selected.length < 2) setSelected((prev) => [...prev, tech])
  }

  const handleReset = (): void => {
    setGuessed([])
    setMistake(0)
    technologies = getRandomTechnologies()
  }

  return (
    <main className='min-h-screen flex flex-col xl:flex-row justify-evenly items-center gap-10'>
      <div className='flex xl:flex-col items-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" id="X" className='w-16 h-16'>
          <path
          fill="none"
          fillRule="evenodd"
          stroke="#d85b53"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 1 1 13M1 1l12 12"
          className="colorStroke000000 svgStroke"
          >
          </path>
        </svg>
        <span className='font-bold text-7xl'>
          :
        </span>
        <span className='font-bold text-7xl'>
           {mistakes}
        </span>
      </div>
      <div className='flex flex-col justify-center items-center gap-16'>
        <ul
        className='grid grid-cols-5 md:grid-cols-6 lg:grid-cols-6 max-w-[1200px] gap-10'
        >
          { technologies.map((tech) => {
            const url = tech.split('|')[0] // aca necesito la url sin el |a o |b sino no hay imagen
            return (
              <li key={tech} className="flex justify-center items-center min-w-14"
                onClick={() => { handleClick(tech) }}>
                { selected.includes(tech) || guessed.includes(tech)
                  ? <img
                      src={url}
                      className={
                        url === 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg'
                          ? 'invert w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24'
                          : 'w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24'
                        }/> // flip-card-front
                  : <img
                  src={emoji}
                  className={
                    'w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 invert-[.50] lg:hover:scale-125 lg:hover:invert cursor-pointer' /* */
                  }/> // flip-card-front
                }
              </li>
            )
          })}
        </ul>
        <button
        onClick={handleReset}
        className={
          'btn btn-outline btn-accent w-[300px]'
        }>
          Jugar de nuevo
        </button>
      </div>
      <Scores/>
    </main>
  )
}

export default Memotest
