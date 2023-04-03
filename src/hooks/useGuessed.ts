// custom hook para las tech adivinadas

import { useEffect, useState } from 'react'
import getTechnologies from '../helpers/getTechnologies'
import { createScore } from '../services/firebase/scoreService'
import validator from 'validator'

const technologies: string[] = getTechnologies()

export const useGuessed = (selected: string[]): [string[], React.Dispatch<React.SetStateAction<string[]>>, number, React.Dispatch<React.SetStateAction<number>>, boolean, React.Dispatch<React.SetStateAction<boolean>> ] => {
  const [guessed, setGuessed] = useState<string[]>([])
  const [mistakes, setMistake] = useState<number>(0)
  const [reloadScores, setReloadScores] = useState(false)

  useEffect(() => {
    if (selected.length === 2) {
      // esto lo hago para que la comparacion sea igual
      if (selected[0].split('|')[0] === selected[1].split('|')[0]) {
        setGuessed((prev) => [...prev, ...selected])
      } else { setMistake((prev) => prev + 1) }
    }
  }, [selected])

  useEffect(() => {
    if (guessed.length === technologies.length) {
      alert('ganaste!')
      const nickname: string | null = prompt(
        'escribe tu apodo (solo con letras) para mostrarlo en la tabla de scores!'
      )
      if (nickname !== null && (Boolean(validator.isAlphanumeric(nickname)))) {
        const nick = nickname[0].toUpperCase() + nickname.substring(1)
        createScore(nick, mistakes)
          .then(response => {
            alert('tu record fue guardado exitosamente!')
          })
          .catch(response => { alert('no pudimos guardar tu record, lo siento.') })
      }
    }
  }, [guessed])

  return [guessed, setGuessed, mistakes, setMistake, reloadScores, setReloadScores]
}
