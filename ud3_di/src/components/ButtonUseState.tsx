import { useState } from "react";
import useButtonUseState from "../hooks/useButtonUseState";
import useButtonUseStatePrice from "../hooks/useButtonUseStatePrice";
//Boton que contara cuantas veces hemos hecho click
function ButtonUseState() {
//Paso las funciones desde mi CUSTOM HOOK separando el diseño de la logica
    //const {counter, handleClickPlus, handleClickRest, suma} = useButtonUseState();
    const {counter, totalPrice, handleClickIncrement, handleClickDecrement} = useButtonUseStatePrice();
/*        //Variable  //metodo set   //Valor inicial
    const [counter, setCounter] = useState(0);
//useState renderiza primero despues hace el set, ejemplo:al darle a +1 
// primero suma de forma q lo mustra en pantalla 
// pero por consola no lo muestra    
// setCounter(counter+1);        console.log(counter);
//se soluciona asi:
//Vaya el profesor no ha encontrado la solucion pensaba q era esta:

    const {suma} = useButtonUseState();

    /*function handleClickPlus() {
        setCounter(counter => counter+1);
        console.log(counter);
    }


    function handleClickRest() {
        setCounter(counter-1);
        if (counter == 0) {
            setCounter(0)
        }
    }*/

//<p>{suma(1, 2)}</p>
    return(
        <>
            <button onClick={handleClickIncrement}>Pincha aqui para sumar</button>
            <button onClick={handleClickDecrement}>Pincha aqui para restar</button>
            <p>Has hecho {counter} clicks</p>
            
            <p>El precio final es: {totalPrice}</p>
        </>
    );
}

export default ButtonUseState;