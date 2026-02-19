function Reset({setcount}){
    return (
        <>
          <button onClick={()=>setcount(0)} style={{color:"blue",margin:"5px"}}>Reset</button>
        </>
    )
}
export default Reset;