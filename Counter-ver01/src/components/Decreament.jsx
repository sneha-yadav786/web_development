function Decreament({setcount}){
    return (
        <>
          <button onClick={()=>setcount(prev=>prev-1)}>Decrease</button>
        </>
    )
}
export default Decreament;