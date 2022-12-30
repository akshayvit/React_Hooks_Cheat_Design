import { memo, useContext } from "react";
import { usercontext } from "./App";


const Todos=({todos}) => {

const name=useContext(usercontext);
    return <>
    <h1>My todos</h1>
    {todos.map((todo,index)=>{
       return  <p>{index}-{todo}</p>
    })}
    <p>{name}</p>
    </>
};

export default memo(Todos);