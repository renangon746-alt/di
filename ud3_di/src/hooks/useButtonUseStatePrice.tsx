import { useState } from "react";

function useButtonUseStatePrice() {

    const [counter, setCounter] = useState(1);
    const[totalPrice, setTotalPrice] = useState(2);

    function handleClickIncrement() {
        setCounter(counter+1);
        setTotalPrice(totalPrice+2);
    }


    function handleClickDecrement() {
       
        if (counter > 1) {
            setCounter(counter-1);
            setTotalPrice(totalPrice-2);
        }
        
    }

    return(
        {//devolver primero todas las variables y despues todas las funciones, aunque puedes crear un objeto y meterlas todas ahi etc.
            counter,
            totalPrice,
            handleClickDecrement,
            handleClickIncrement
        }
    );
}

export default useButtonUseStatePrice;