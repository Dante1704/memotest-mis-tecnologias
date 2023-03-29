// custom hook para las tech adivinadas

import { useEffect, useState } from 'react'
import getTechnologies from '../helpers/getTechnologies'
import { createScore } from '../services/firebase/scoreService'

const technologies: string[] = getTechnologies()

export const useGuessed = (selected: string[]): [string[], React.Dispatch<React.SetStateAction<string[]>>, number, React.Dispatch<React.SetStateAction<number>>] => {
  const [guessed, setGuessed] = useState<string[]>([])
  const [mistakes, setMistake] = useState<number>(0)

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split('|')[0] === selected[1].split('|')[0]) { // esto lo hago para que la comparacion sea igual
        setGuessed((prev) => [...prev, ...selected])
      } else { setMistake((prev) => prev + 1) }
    }
  }, [selected])

  useEffect(() => {
    if (guessed.length === technologies.length) {
      alert('ganaste!')
      const nickname: string | null = prompt('escribe tu apodo para mostrarlo en la tabla de scores!')
      nickname !== null && createScore(nickname, mistakes)
        .then(response => { alert('tu record fue guardado exitosamente!') })
        .catch(response => { alert('no pudimos guardar tu record, lo siento.') })
    }
  }, [guessed])

  return [guessed, setGuessed, mistakes, setMistake]
}
