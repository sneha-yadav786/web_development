import { useState } from "react";

function Theme(){
    const [isDark,setDark]=useState(false);
    function Toggle(){
        setDark(isDark=>!isDark);
    };
    return (
        <>
          <button onClick={Toggle}>🌞</button>
          <p style={{color: isDark ? "white" : "black", backgroundColor : isDark ? "black":"white", height:"400px", width:"400px"}}>I am sneha yadav. At this time I am very hungry but not go for take my lunch beacuse
            I have to do more practise on my projects.
          </p>
        </>
    )

}
export default Theme;