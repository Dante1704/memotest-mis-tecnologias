import Swal from 'sweetalert2'
import validator from 'validator'

// este custom hook se encarga de capturar el nickname y validarlo
async function getNickname (): Promise<string> {
  await Swal.fire('Ganaste!')
  const { value: nickname } = await Swal.fire({
    title: 'escribe tu apodo (podés combinar letras y números)',
    input: 'text',
    inputLabel: 'Bob Patiño',
    inputValidator: (value): any => {
      if (value === null || (!validator.isAlphanumeric(value))) {
        return 'Lo siento, solo se permiten letras y numeros'
      }
    }
  })
  return nickname
}

export default getNickname
