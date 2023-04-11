// custom hook para las tech adivinadas
import { useEffect, useState } from 'react'
import getTechnologies from '../helpers/getTechnologies'
import getNickname from '../helpers/getNickname'
import { createScore } from '../services/firebase/scoreService'
import Swal from 'sweetalert2'

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
        .catch(error => {
          Swal.fire({
            text: 'Lo siento, no pudimos guardar tu score',
            icon: 'error',
            timer: 2000
          })
            .then(() => { window.location.reload() })
            .catch((error) => { console.log(error.message) })
          console.log(error)
        }
        )
    }
  }, [guessed])

  useEffect(() => {
    if (nickname !== '') {
      createScore(nickname, mistakes)
        .then(response => {
          Swal.fire({
            title: response.message,
            icon: 'success',
            timer: 2000
          })
            .then(() => { window.location.reload() })
            .catch((error) => { console.log(error.message) })
        })
        .catch(error => {
          Swal.fire({
            text: error.message,
            icon: 'error',
            timer: 1000
          })
            .then(() => { window.location.reload() })
            .catch((error) => { console.log(error.message) })
        })
    }
  }, [nickname])

  return [guessed, setGuessed, mistakes, setMistake]
}
