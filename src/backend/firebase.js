import { initializeApp } from 'firebase/app';
import { getFirestore, query, orderBy, collection,doc, getDoc, getDocs, addDoc, Timestamp, deleteDoc} from 'firebase/firestore';

const firebaseapp = initializeApp({
    apiKey: "AIzaSyBZ0SR02FzH49G0RHg4zP0Gdi1o492mIq8",
    authDomain: "todo-app-boxter.firebaseapp.com",
    projectId: "todo-app-boxter",
    storageBucket: "todo-app-boxter.appspot.com",
    messagingSenderId: "229223158930",
    appId: "1:229223158930:web:df4edc9e83744882ee024b",
    measurementId: "G-XNHBZVN9L8"
});

const db = getFirestore(firebaseapp)

const getTodos = async () => {
    const todosCol = collection(db, 'todos');
    const q = query(todosCol, orderBy('timestamp', 'desc'))
    const todosSnapshot = await getDocs(q);
    const todosList = todosSnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));

    return todosList
}
const getTodoByID = async (id) => {
    const snap = await getDoc(doc(db, 'todos', id))
    if (snap.exists()) {
        console.log(snap.data())
      }else{
        console.log("fuck u") 
      }
    return snap;
}

const postTodos = async (data) => {
    try{
        await addDoc(collection(db, 'todos'), {
            todo: data,
            timestamp: Timestamp.now()
        });
        return getTodos();
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const deleteTodo = async (id)=>{
    try{
        await deleteDoc(doc(db, 'todos', id));
        return getTodos();
    }
    catch(e){
        console.error("nmg brt")
    }
}

const getAllData = getTodos();

export {getAllData, postTodos, deleteTodo, getTodoByID};