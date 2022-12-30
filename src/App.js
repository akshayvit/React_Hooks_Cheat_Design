import logo from './logo.svg';
import './App.css';
import { Shooted } from './Shooted';
import Form from './Form';
import { Shooting } from './Shooting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Todos from './Todos';
import { createContext, useEffect, useRef, useState } from 'react';
import { Complete } from './complete';



export const usercontext=createContext();

function App(props) {
  let [hr,setHour]=useState(0);
  let [mint,setMinute]=useState(0);
  let [sec,setSecond]=useState(0);
  const [name,setName]=useState("Akshay Bhodu");
  const [todos,setTodos]=useState(['Todo1','Todo2']);
  const initialshoots=useRef(10);

  let lh=-1;
  useEffect(()=>{
    let timer =setInterval(()=>{
   // setHour((h)=>{h=(h>23) ? 0:h+1;});
    setSecond((s)=>new Date().getSeconds());
      setMinute((m)=>new Date().getMinutes());
      setHour((h)=>new Date().getHours());
  console.log(sec);
    },1000);
    return ()=>clearInterval(timer);
  },[hr,mint,sec]);

  const incr=()=>{

  //  setCount((c)=>c+1);
   // setTodos((todos)=>{let todotmp=todos;todotmp.push(`Todo${count}`);return {...todos,todos:todotmp}});
  };
  return (
    <>

<Complete/>
    <button onClick={incr}>{hr}:{mint}:{sec}</button>
    <usercontext.Provider value={name}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Shooting toys="10"/>}></Route>
            <Route path="Form" element={<Form/>}/>
            <Route path="Todos" element={<Todos todos={todos}/>}/>
          </Route>
      </Routes>
      </BrowserRouter>
      </usercontext.Provider>
      </>
  );
}

export default App;
