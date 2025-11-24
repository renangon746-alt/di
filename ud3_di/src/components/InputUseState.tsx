import { useState } from "react";

function InputUseState() {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    //la (e) da error porque hay que marcar el tipo de dato que nos lo dira el profesor mas adelante
//palabra reservada 'e' que viene de evento, le pasamos el evento onChange
    function handleChangeName(e:React.ChangeEvent<HTMLInputElement>) {
        //console.log(e.target.value);
        setName(e.target.value);
    }

    function handleChangeAge(e:React.ChangeEvent<HTMLInputElement>){
    //aqui al marcar el tipo de dato para 'e' dentro hay que usar isNaN
        if(isNaN(e.target.valueAsNumber)) {setAge(0); return;}

        setAge(e.target.valueAsNumber);
    }

    return(
        <>
            <input onChange={handleChangeName} type="text" placeholder="Introduce tu nombre"></input>
            <input onChange={handleChangeAge} type="number" placeholder="Introduce tu edad"></input>
            <p>Tu nombre es: {name}</p>
            <p>Tu edad es: {age}</p>
        </>
    );
}

export default InputUseState;