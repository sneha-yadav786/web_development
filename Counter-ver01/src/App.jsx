import { useState } from "react";
import Increament from "./components/Increament";
import Decreament from "./components/Decreament";
import Reset from "./components/Reset";
function Count(){
    const [count, setcount]=useState(0);
    
    
    return (
        <>
          <h2 style={{color: count<5 ? "red" : "black"}}>{count}</h2>
          <Increament setcount={setcount}></Increament>
          <Decreament setcount={setcount}></Decreament>
          <Reset setcount={setcount}></Reset>
        </>
    )
}
export default Count;