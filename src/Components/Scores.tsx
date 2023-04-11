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
  }, [/* reload */])

  return (
    <>
        <div className="flex justify-center items-center overflow-x-auto">
          <table className="table ">
            {/* head */}
           <thead >
               <tr >
               <th className="bg-neutral-focus text-center">#</th>
               <th className="bg-neutral-focus">Nickname</th>
               <th className="bg-neutral-focus text-center">Errores</th>
                </tr>
           </thead>
           <tbody>
             {/* row 1 */}
           {(scores !== undefined)
             ? scores.map((score, index) => {
               return (
                  <tr key={score.nickname}>
                   <th className="bg-neutral py-2 text-center"> {index + 1 } </th>
                    <td className="bg-neutral py-2">{score.nickname}</td>
                     <td className="bg-neutral py-2 text-center">{score.mistakes}</td>
                  </tr>
               )
             })
             : <tr>
                  <td>no hay scores</td>
                </tr>}
          </tbody>
        </table>
      </div>
  </>
  )
}

export default Scores
