function Decreament({setcount}){
    return (
        <>
          <button onClick={()=>setcount(prev=>prev>0 ? prev-1 : 0)} style={{color:"red",margin:"5px"}}>Decrease</button>
        </>
    )
}
export default Decreament;