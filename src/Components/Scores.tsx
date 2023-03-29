import { useState, useEffect } from 'react'
import { getAllscores } from '../services/firebase/scoreService'

interface Score {
  nickname: string
  mistakes: number
}

/* type Score = Array<{
  nickname: string
  mistakes: number
}> */

function Scores (): JSX.Element {
  const [scores, setScores] = useState<Score[]>([])
  useEffect(() => {
    getAllscores()
      .then(scores => { setScores(scores) })
      .catch(error => { console.log(error) })
  }, [])

  return (
        <div className="w-screen min-h-screen flex justify-center items-center">
            <table >
                <thead>
                    <tr>
                        <th>NICKNAME</th>
                        <th>RESULTADO</th>
                    </tr>
                </thead>
                <tbody>
                    {(scores !== undefined)
                      ? scores.map((score) => {
                        return (
                            <tr key={score.nickname}>
                                <td>{score.nickname}</td>
                                <td>{score.mistakes}</td>
                            </tr>
                        )
                      })
                      : <tr>
                          <td>no hay scores</td>
                        </tr>}
                </tbody>
            </table>
        </div>
  )
}

export default Scores
