const technologies: string[] = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg'
].flatMap(tech => [`${tech}|a`, `${tech}|b`]) // es una manera de devolver los elementos x2 aplanados para no repetir los mismos string

const getRandomTechnologies = (): string[] => {
  return technologies.sort((a, b) => Math.random() - 0.5) // si no tiene el -0.5, el valor aleatorio es siempre positivo y no genera nada aleatoriamente
}

export default getRandomTechnologies
