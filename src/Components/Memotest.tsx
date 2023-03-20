import getTechnologies from '../helpers/getTechnologies'

const technologies: string[] = getTechnologies()

function Memotest (): JSX.Element {
  console.log(technologies)

  return (
        <div>Memotest</div>
  )
}

export default Memotest
