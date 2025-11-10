interface UserData {
    name:string,
    age:number,
    isActive:boolean
}

function Button() {
    //gracias a la tecnologia JSX,
    //permite que js devuelva etiquetas HTML

    /*let name:string = "Renan";
    let age:number = 19;
    let price:number = 20.6; variables con decimales se ponen con number tambien, no con float por ejemplo
    let isActive:boolean = true;*/
    //let name:string = "Renan";
    /*let names:string[] = ["Juan", "Pedro", "Luis"];
    //names.push("Renan");
    //Clave-Valor. La clave siempre es unica
    let teachers: Map<string, string> = new Map();
    teachers.set("renan@gmail.com", "Renan");
    teachers.set("pedro@gmail.com", "Pedro");
    teachers.set("luis@gmail.com", "Luis");*/
    let user: UserData = {
        name: "Renan",
        age: 19,
        isActive:false
    }

    
    /*let lastName = names.pop();extrae el ultimo elemento*/
    if(user.isActive){
    return <button>Esta logueado</button>;
    }
    //Nunca usar else en React
    return <button>No esta logueado</button>;
}
//Exportar siempre
export default Button;