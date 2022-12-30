import { useEffect, useRef } from "react";
import { Shooted } from "./Shooted";

export function Shooting(props) {
  const toys=parseInt(props.toys);
  const shootcount=useRef(10);


  let shooters=[];
  for(var i=0;i<toys;i++) {
    shooters.push(
    `M ${50-i*25} 90 C 150  25 0 0 25  ${20-i*25}`
   );
  }
  useEffect(()=>{
    shootcount.current=shooters.length;
  },[shooters]);
  const shoot=(a)=>{
    shootcount.current--;
    console.log(shooters.length,shootcount);
    const shooterid=shooters[0];
    shooters.shift();

    document.getElementById(shooterid).style.visibility="hidden";
  };
  return (
    <>
      <Shooted  scount={shootcount.current}/>
      <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 100'>
        <path d="M50 0 L20 25  L20 32 q 50 30 -30 0 Z" stroke="brown" strokeWidth="8" fill="blue"/>
        {shooters.map((shooter)=><path d={shooter} id={shooter} onClick={()=>shoot(this)} stroke="blue" fill='cyan' strokeWidth="5"/>)}
      </svg>

    </>
  );
}

