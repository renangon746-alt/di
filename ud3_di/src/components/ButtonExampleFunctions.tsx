//Definicion del componente
function ButtonExampleFunctions() {

    //Handle --> Manejador es obligatorio por estanda de React
    // Handle seguido del nombre del evento.
    function handleClick() {
        alert("Has hecho cliz");
    }

    return (
        <button onClick={handleClick}>Click Here</button>
    );

/*
    //Suma Nombre de la funcion
    //num1 y num2 parametros de entrada
    //:number indica el tipo de dato que devuelve la funcion
    function suma(num1:number, num2:number):number {
        return num1 + num2;
    }

    return (
        <>
            <h1>Suma números</h1>
            <span>{suma(5, 6)}</span>
        </>
    );*/
}

export default ButtonExampleFunctions;