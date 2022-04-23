// import {useState} from "react";
// import NewsList from "./News";
//
// const App = () => {
//     const [todo, setTodo] = useState("");
//     const [todos, setTodos] = useState([]);
//     const onChange = (e) => setTodo(e.target.value);
//     const onSubmit = (e) => {
//         e.preventDefault();
//         if (todo === "") {
//             return;
//         }
//         setTodos(currentArr => [todo, ...currentArr]);
//         setTodo("");
//     }
//     console.log(todos);
//     return (
//         <div>
//             <NewsList />
//             <h1>My todos({todos.length})</h1>
//             <form onSubmit={onSubmit}>
//                 <input type="text" onChange={onChange} value={todo} placeholder="Write your to do..."/>
//                 <button>Add to do</button>
//             </form>
//             <hr />
//             <ul>
//                 {todos.map((todo, index) => <li key={index}>{todo}</li>)}
//             </ul>
//         </div>
//     );
// }
//
// export default App;
//