import payimage from "../images/pay.jpeg";
import loaderImg from "../images/loderimg.gif";
import { useState } from "react";
const PaymentDone=()=>{
    const [isLoading, setIsLoading]= useState(true);
    setTimeout(()=>{
        setIsLoading(false);
    }, 1000);
    return(
        <>
            <center>
                {isLoading ? (<>
                    <img src={loaderImg} />
                 </>) : (<> 
                  <img src={payimage} />
                 </>)}
            </center>       
        </>
    )
}
export default PaymentDone;