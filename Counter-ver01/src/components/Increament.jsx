function Increament({setcount}){
    return(
        <>
          <button onClick={()=>setcount(prev=>prev+1)} style={{color:"green",margin:"5px"}}>Increase</button>
        </>
    )
}
export default Increament;