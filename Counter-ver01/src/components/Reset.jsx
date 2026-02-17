function Reset({setcount}){
    return (
        <>
          <button onClick={()=>setcount(0)}>Reset</button>
        </>
    )
}
export default Reset;