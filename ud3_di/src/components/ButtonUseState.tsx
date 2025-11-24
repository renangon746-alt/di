import { useState } from "react";
//Boton que contara cuantas veces hemos hecho click
function ButtonUseState() {
        //Variable  //metodo set   //Valor inicial
    const [counter, setCounter] = useState(0);
//useState renderiza primero despues hace el set, ejemplo:al darle a +1 
// primero suma de forma q lo mustra en pantalla 
// pero por consola no lo muestra    
// setCounter(counter+1);        console.log(counter);
//se soluciona asi:
//Vaya el profesor no ha encontrado la solucion pensaba q era esta:
    function handleClickPlus() {
        setCounter(counter => counter+1);
        console.log(counter);
    }


    function handleClickRest() {
        setCounter(counter-1);
        if (counter == 0) {
            setCounter(0)
        }
    }

    return(
        <>
            <button onClick={handleClickPlus}>Pincha aqui para sumar</button>
            <button onClick={handleClickRest}>Pincha aqui para restar</button>
            <p>Has hecho {counter} clicks</p>
        </>
    );
}

export default ButtonUseState;