import getTechnologies from '../helpers/getTechnologies'
import emoji from '../assets/emoji-confused.png'
import { useState } from 'react'

const technologies: string[] = getTechnologies()

function Memotest (): JSX.Element {
  const [selected, setSelected] = useState<string[]>([''])

  const handleClick = (tech: string): void => { // cuando lo clicleo, que valla a selected
    setSelected((prev) => [...prev, tech])
  }
  return (
    <main className='h-[100vh] flex justify-center items-center'>
      <ul className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 max-w-[1200px] gap-10'>
      { technologies.map((tech) => {
        const url = tech.split('|')[0]
        return (
          <li key={tech} className="flex justify-center items-center min-w-14" onClick={() => { handleClick(tech) }}>
            {/* <div className={!isHidden ? 'flip-card-rotate flip-card-inner' : 'flip-card-inner'}>
              <img src={url} className="w-12 h-12 sm:w-24 h-24 flip-card-back "/>
              <img src={emoji} className="w-12 h-12 sm:w-24 h-24 flip-card-front"/>
            </div> */}
            { selected.includes(tech)
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
