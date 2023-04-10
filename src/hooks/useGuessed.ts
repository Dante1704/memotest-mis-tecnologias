// custom hook para las tech adivinadas

import { useEffect, useState } from 'react'
import getTechnologies from '../helpers/getTechnologies'
import getNickname from '../helpers/getNickname'
import { createScore } from '../services/firebase/scoreService'

const technologies: string[] = getTechnologies()

export const useGuessed = (selected: string[]): [string[], React.Dispatch<React.SetStateAction<string[]>>, number, React.Dispatch<React.SetStateAction<number>>] => {
  const [guessed, setGuessed] = useState<string[]>([])
  const [mistakes, setMistake] = useState(0)
  const [nickname, setNickname] = useState<string>('')

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
      getNickname()
        .then(nickname => { setNickname(nickname[0].toUpperCase() + nickname.substring(1)) })
        .catch(error => { console.log(error) }
        )
    }
  }, [guessed])

  useEffect(() => {
    if (nickname !== '') {
      createScore(nickname, mistakes)
        .then(response => {
          alert('tu record fue guardado exitosamente!')
          window.location.reload()
        })
        .catch(response => { alert('no pudimos guardar tu record, lo siento.') })
    }
  }, [nickname])

  return [guessed, setGuessed, mistakes, setMistake]
}
