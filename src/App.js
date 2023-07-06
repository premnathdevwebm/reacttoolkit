import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "./features/todo/todoSlice";
import { useGetPokemonByNameQuery } from './services/pokemon'

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  const [task, setTask] = useState("")
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handleAdd = ()=>{
    dispatch(addTask(task))
  }
  return (
    <div className="App">
      <>
        <h2>Add Tasks</h2>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </>
      <hr />
      <h2>Todo Lists</h2>
      {todoList.map(task=><p key={task.name}>{task.name}</p>)}
      <hr />
      <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img width={200} height={200} src={data.sprites.back_shiny} alt={data.species.name} />
        </>
      ) : null}
      </>
    </div>
  );
}

export default App;
