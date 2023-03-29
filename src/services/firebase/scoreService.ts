// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection, getDocs, query, orderBy, type CollectionReference } from 'firebase/firestore'

interface Score {
  nickname: string
  mistakes: number
}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyBZRmBm0rRpFKLIchM58mJCRPhsDzWMvmg',
  authDomain: 'memotest-mis-tecnologias.firebaseapp.com',
  projectId: 'memotest-mis-tecnologias',
  storageBucket: 'memotest-mis-tecnologias.appspot.com',
  messagingSenderId: '90927602299',
  appId: '1:90927602299:web:4184e2abe0de2713b760de',
  measurementId: 'G-YXNZJ4YKXK'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function createScore (nickname: string, mistakes: number): Promise<void> {
// Add a new document in collection "scores"
  await addDoc(collection(db, 'scores'), {
    nickname,
    mistakes
  })
}

export async function getAllscores (): Promise<Score[]> {
  const scores: Score[] = []
  const scoresRef = collection(db, 'scores') as CollectionReference<Score> // esta es la manera de convertir un dato que viene de firebase a un dato declrado por mi, este collectionReference debe ser importado como type de firebase
  const q = query(scoresRef, orderBy('mistakes'))
  try {
    const response = await getDocs(q)
    response.forEach((doc) => {
      const score = doc.data()
      scores.push(score)
    })
    console.log('datos traidos de firebase exitosamente')
  } catch (error) {
    console.log(error)
  }
  return scores
}
