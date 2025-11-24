import { useState } from "react";

function FormUseState() {

    const [form, setForm] = useState({
        name : '',
        surnames : '',
        email : ''
    });

    function handleChangeName(e:React.ChangeEvent<HTMLInputElement>){
        //Modificar el formulario --> Pero unicamente cambiar el atributo name
        setForm({...form, name:e.target.value})
    }

    function handleChangeSurnames(e:React.ChangeEvent<HTMLInputElement>){
        //Modificar el formulario --> Pero unicamente cambiar el atributo surnames
        setForm({...form, surnames:e.target.value})
    }

    function handleChangeEmail(e:React.ChangeEvent<HTMLInputElement>){
        //Modificar el formulario --> Pero unicamente cambiar el atributo email
        setForm({...form, email:e.target.value})
    }

    return(
        <>
            <input type="text" onChange={handleChangeName} value={form.name} placeholder="Introduce tu nombre"></input>
            <input type="text" onChange={handleChangeSurnames} value={form.surnames} placeholder="Introduce tus apellidos"></input>
            <input type="email"onChange={handleChangeEmail} value={form.email} placeholder="Introduce tu email"></input>
            <p>Tu nombre es: {form.name}, Tus apellidos: {form.surnames}, y tu email {form.email}</p>  
        </>
    );
}

export default FormUseState;