import { useState } from 'react'
import { Link } from 'react-router-dom'
import getRandomTechnologies from '../helpers/getTechnologies'
import { useGuessed } from '../hooks/useGuessed'
import emoji from '../assets/emoji-confused.png'

let technologies: string[] = getRandomTechnologies()

function Memotest (): JSX.Element {
  const [selected, setSelected] = useState<string[]>([])
  const [guessed, setGuessed, mistakes, setMistake] = useGuessed(selected)

  selected.length === 2 && setTimeout(() => { setSelected([]) }, 1000)

  const handleClick = (tech: string): void => { // cuando lo clickeo, que vaya a selected
    // si es menor que 2 que agregue sino, no. Las comparaciones son de a 2
    if (selected.length < 2) setSelected((prev) => [...prev, tech])
  }

  const handleReset = (): void => {
    setGuessed([])
    setMistake(0)
    technologies = getRandomTechnologies()
  }

  return (
    <main className='h-[100vh] flex flex-col justify-center items-center gap-10'>
      <ul className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 max-w-[1200px] gap-10'>
      { technologies.map((tech) => {
        const url = tech.split('|')[0] // aca necesito la url sin el |a o |b sino no hay imagen
        return (
          <li key={tech} className="flex justify-center items-center min-w-14" onClick={() => { handleClick(tech) }}>
            { selected.includes(tech) || guessed.includes(tech)
              ? <img src={url} className="w-12 h-12 sm:w-24 h-24"/> /* flip-card-front */
              : <img src={emoji} className="w-12 h-12 sm:w-24 h-24"/> /* flip-card-front */
            }
          </li>
        )
      })}
      </ul>
      <span>Mistakes: {mistakes}</span>
      <button onClick={handleReset}>Jugar de nuevo</button>
      <Link to={'/scores'}>Ver Mejores Marcas</Link>
    </main>
  )
}

export default Memotest
