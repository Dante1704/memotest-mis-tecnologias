import { getAllscores } from '../services/firebase/scoreService'
const scores = [
  {
    nickname: 'chispas',
    mistakes: 20
  },
  {
    nickname: 'pelusa',
    mistakes: 35
  },
  {
    nickname: 'tornillo',
    mistakes: 40
  },
  {
    nickname: 'fideo',
    mistakes: 52
  },
  {
    nickname: 'zorro',
    mistakes: 57
  },
  {
    nickname: 'chiqui',
    mistakes: 60
  },
  {
    nickname: 'galleta',
    mistakes: 65
  }, {
    nickname: 'caramelo',
    mistakes: 25
  }
]

function Scores (): JSX.Element {
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
                    {scores.map(({ nickname, mistakes }) => {
                      return (
                            <tr key={nickname}>
                                <td>{nickname}</td>
                                <td>{mistakes}</td>
                            </tr>
                      )
                    })}
                </tbody>
            </table>
        </div>
  )
}

export default Scores
