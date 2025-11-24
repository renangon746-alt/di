//import "../assets/button.css"; Se puede importar asi tambien - <button className="button">
//import buttonStyle from '../assets/button_primary.module.css'; - <button className={buttonStyle.button}>
//con tailwind <button className="bg-blue-500 text-stone-50"> siguiendo lo que pone en la documentacion de tailwindcss

function Button({text}:{text:string}){

    /* Peor forma de hacer un estilo: 
    const BUTTON_STYLE = {
          backroundColor : "blue",/* En css se usa background-color*/
/*        color : "white",     en return <button style={BUTTON_STYLE}
        padding : "10px 20px"
    }*/

    return <button className="bg-blue-500 text-stone-50 rounded-xl p-2">{text}</button>;
}

export default Button;