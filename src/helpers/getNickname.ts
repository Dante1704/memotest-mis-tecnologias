import Swal from 'sweetalert2'
import validator from 'validator'

// este custom hook se encarga de capturar el nickname y validarlo
async function getNickname (): Promise<string> {
  const { value: nickname } = await Swal.fire({
    title: 'Ganaste!',
    input: 'text',
    inputLabel: 'Escribí tu nombre o nickname',
    inputValidator: (value): any => {
      if (value === null || (!validator.isAlphanumeric(value))) {
        return 'Lo siento, solo se permiten letras y numeros'
      }
    }
  })
  return nickname
}

export default getNickname
