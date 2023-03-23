import { useEffect, useState } from 'react'
import getTechnologies from '../helpers/getTechnologies'
import { useGuessed } from '../hooks/useGuessed'
import emoji from '../assets/emoji-confused.png'

const technologies: string[] = getTechnologies()

function Memotest (): JSX.Element {
  const [selected, setSelected] = useState<string[]>([])
  const [guessed, setGuessed] = useGuessed(selected)

  selected.length === 2 && setTimeout(() => { setSelected([]) }, 1000)

  useEffect(() => {
    if (guessed.length === technologies.length) {
      alert('ganaste!')
      setTimeout(() => { setGuessed([]) }, 1000)
    }
  }, [guessed])

  const handleClick = (tech: string): void => { // cuando lo clickeo, que vaya a selected
    // si es menor que 2 que agregue sino, no. Las comparaciones son de a 2
    if (selected.length < 2) setSelected((prev) => [...prev, tech])
  }

  return (
    <main className='h-[100vh] flex justify-center items-center'>
      <ul className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 max-w-[1200px] gap-10'>
      { technologies.map((tech) => {
        const url = tech.split('|')[0]
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
    </main>
  )
}

export default Memotest
