import { useReducer } from "react";

const itodos =[
{
    id:1,
    name:'abc',
    complete:false
},
{
    id:2,
    name:'bcd',
    complete:false
}
];

const reducer =(state,action)=>{
    switch(action.type) {
        case "COMPLETE":
            return state.map((todo)=>{
                if(todo.id==action.id) return {...todo,complete:!todo.complete};
                else return todo;
            });
        default:
            return state;
    }

};

export function Complete() {
    const [todos,dispatch]=useReducer(reducer,itodos);
    const func=(todo)=>{
        dispatch({type:"COMPLETE",id:todo.id});
    };
    return (
    <table><tr><th>Mark</th><th>ID</th><th>NAME</th><th>Completed</th></tr>
      {todos.map((todo)=>(
        <tr><td><input type="checkbox" checked={todo.complete} onChange={()=>func(todo)}/></td>
        <td>{todo.id}</td><td>{todo.name}</td><td>{todo.complete ? "Done":"Not done"}</td></tr>
      ))}
      </table>
    );
}