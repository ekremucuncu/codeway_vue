import { getFirestore } from "firebase/firestore"; 
import { collection, getDocs, } from "firebase/firestore"; 
import app from './initialize';




export async function data(){
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "Configuration"));
    var rows = []
    querySnapshot.forEach((doc) => {
        rows.push(doc.data())
    })
    return rows
}


