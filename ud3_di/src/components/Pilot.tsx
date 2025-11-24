interface PilotData {
    photoPilot:string,
    name:string,
    team:string,
    number:number,//number or string
    country:string,
    photoCountry:string
}

function Pilot({photoPilot, name, team, number, country, photoCountry}:PilotData){
    
    return(
        <div>
            <img src={photoPilot} alt={name}></img>
            <p>{number}</p>
            <h1>{name}</h1>
            <p>{photoCountry}</p>
            <p>{country}</p>
            <p>{team}</p>
        </div>
    ); 
}

export default Pilot;