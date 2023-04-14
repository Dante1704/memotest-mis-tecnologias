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
        <div className="flex justify-center items-center overflow-y-auto overflow-x-hidden rounded-xl">
          <ul className="max-h-[616px] bg-neutral-focus ">
            {/* head */}
            <li className="bg-neutral-focus p-4 flex gap-10">
              <span className="text-center min-w-[25px] font-bold">#</span>
              <span className="min-w-[105px] font-bold text-center">
                NICKNAME</span>
              <span className="text-center font-bold min-w-[72px] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" id="X" className='w-4 h-4'>
                  <path
                  fill="none"
                  fillRule="evenodd"
                  stroke="#d85b53"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 1 1 13M1 1l12 12"
                  className="colorStroke000000 svgStroke"
                  >
                  </path>
                </svg>
              </span>
            </li>

             {/* row 1 */}
           {(scores !== undefined)
             ? scores.map((score, index) => {
               return (
                  <li key={score.nickname} className="bg-neutral p-4 flex gap-10">
                   <span className="min-w-[25px] text-center font-bold"> {index + 1} </span>
                   <span className="min-w-[150px] text-center">{score.nickname}</span>
                   <span className="min-w-[72px] text-center">{score.mistakes}</span>
                  </li>
               )
             })
             : <li>
                  <span>No hay scores</span>
                </li>
            }
        </ul>
      </div>
  </>
  )
}

export default Scores
