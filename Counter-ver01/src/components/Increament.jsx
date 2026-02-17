function Increament({setcount}){
    return(
        <>
          <button onClick={()=>setcount(prev=>prev+1)}>Increase</button>
        </>
    )
}
export default Increament;