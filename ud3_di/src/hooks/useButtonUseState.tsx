import { useState } from "react";
//ESTAMOS CREANDO UN HOOK CUSTOMIZADO QUE
//ALMACENARA LA LOGICA DE NUESTRO COMPONENTE
//Forma para separar la logica del diseño, front y back
function useButtonUseState() {

    const [counter, setCounter] = useState(0);

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

function suma(numero1: number, numero2: number){
    return numero1 + numero2;
}

    return {counter, 
            handleClickPlus, 
            handleClickRest, suma};
    //REACT nos permite devolver tanto variables como funciones, etc. permitiendo dejar un codigo muy limpio : return {name, suma};
    //Aqui devuelve LA FUNCION no el resultado 
    //por lo tanto se puede exportar a un componente 
    //LA FUNCION y usarla desde el otro componente
}

export default useButtonUseState;