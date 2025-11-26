function SelectorSinBucle() {
    const localidades = [
        { id: 1, name: "Teruel" },
        { id: 2, name: "Aragon" },
        { id: 3, name: "Huesca" },
    ]

    return(//Nombre de la coleccion .map y entre () el nombre que se le da en el map 
        <select>
            { localidades.map((localidad) => (
                //Para que REACT identifique un componente de otro
                //necesitamos asignarle una key 
                //porque .map en clave/valor - key/value
                <option key={localidad.id} value={localidad.id}>{localidad.name}</option>
            ))}
        </select>
    );
    /*return(//Bucle a mano MAL!
        <select>
            <option value={localidades[0].id}>{localidades[0].name}</option>
            <option value={localidades[1].id}>{localidades[1].name}</option>
            <option value={localidades[2].id}>{localidades[2].name}</option>
        </select>
    );*/
}

export default SelectorSinBucle;