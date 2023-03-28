// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection, getDocs, query, orderBy } from 'firebase/firestore'

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

export function getAllscores (): Array<{
  nickname: string
  mistakes: number
}> {
  const scores = []
  const q = query(collection(db, 'scores'), orderBy('mistakes'))
  getDocs(q)
    .then(
      res => {
        res.forEach((doc) => {
          const score = doc.data()
          scores.push(score)
        })
      }
    )
    .catch(error => { console.log(error) })
  console.log(scores)

  return scores
}
