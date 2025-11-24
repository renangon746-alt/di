//Definicion de la props //Especificar el tipo de dato de cada props

function Input({placeholder, type}:{placeholder:string, type:string}) {
    return <input type={type} placeholder={placeholder}></input>;
}

export default Input;