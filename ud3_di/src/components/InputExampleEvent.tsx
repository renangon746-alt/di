function InputExampleEvent() {

    //Manejar el evento change "'e' se refiere a event"
    function handleChange(e:any){//el any es para decir que el tipo de dato es cualquiera, aqui se ha hecho pq el profe no sabe cual es el tipo de dato q es aqui
        console.log(e.target.values);
    }

    return <input onChange={handleChange/*no poner (e)*/} type="text" placeholder="Introduce tu nombre"></input>
}

export default InputExampleEvent;