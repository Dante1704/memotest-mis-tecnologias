// custom hook para las tech adivinadas

import { useEffect, useState } from 'react'

export const useGuessed = (selected: string[]): [string[], React.Dispatch<React.SetStateAction<string[]>>] => {
  const [guessed, setGuessed] = useState<string[]>([])
  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split('|')[0] === selected[1].split('|')[0]) { // esto lo hago para que la comparacion sea igual
        setGuessed((prev) => [...prev, ...selected])
      }
    }
  }, [selected])
  return [guessed, setGuessed]
}
