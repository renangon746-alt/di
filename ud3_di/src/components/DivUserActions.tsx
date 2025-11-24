import Button from "./Button";
import Input from "./Input";

function DivUserActions() {

    const emailInput = {
        placeholder:"Correo electronico o número de teléfono",
        type: "text"
    }  

    //Ejemplo de objeto con la informacion de passwordInput
   const passwordInput = {
        placeholderPassword: "Contraseña",
        createAccountTypeInput: "password"
   }

    const loginText = "Iniciar Sesión";
    const createAccountText = "Crear una cuenta";

    return (
        <> {/*Estas apertura y cierre permite devolver mas de un componente*/}
            <Input {...emailInput}/>
            <Input placeholder={passwordInput.placeholderPassword} type={passwordInput.createAccountTypeInput}/>
            <Button text={loginText}/>
            <Button text ={createAccountText}/>
        </>
    );
}

export default DivUserActions;