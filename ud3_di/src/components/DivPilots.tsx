import Pilot from "./Pilot";

function DivPilots(){

    const PILOTS = [
        {
            photoPilot:"https://resources.motogp.pulselive.com/photo-resources/2025/02/10/4166e780-86ca-49d8-a42b-4627d26b1f48/I8FgpnEk.png?height=400&width=600",
            name:"Johann Zarco",
            team:"CASTROL Honda LCR",
            number:5,
            country:"France",
            photoCountry:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
        },
        {
            photoPilot:"https://resources.motogp.pulselive.com/photo-resources/2025/02/10/4166e780-86ca-49d8-a42b-4627d26b1f48/I8FgpnEk.png?height=400&width=600",
            name:"Johann Zarco",
            team:"CASTROL Honda LCR",
            number:5,
            country:"France",
            photoCountry:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
        },
        {
            photoPilot:"https://resources.motogp.pulselive.com/photo-resources/2025/02/10/4166e780-86ca-49d8-a42b-4627d26b1f48/I8FgpnEk.png?height=400&width=600",
            name:"Johann Zarco",
            team:"CASTROL Honda LCR",
            number:5,
            country:"France",
            photoCountry:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
        },
        {
            photoPilot:"https://resources.motogp.pulselive.com/photo-resources/2025/02/10/4166e780-86ca-49d8-a42b-4627d26b1f48/I8FgpnEk.png?height=400&width=600",
            name:"Johann Zarco",
            team:"CASTROL Honda LCR",
            number:5,
            country:"France",
            photoCountry:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
        },
        {
            photoPilot:"https://resources.motogp.pulselive.com/photo-resources/2025/02/10/4166e780-86ca-49d8-a42b-4627d26b1f48/I8FgpnEk.png?height=400&width=600",
            name:"Johann Zarco",
            team:"CASTROL Honda LCR",
            number:5,
            country:"France",
            photoCountry:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
        },
        {
            photoPilot:"https://resources.motogp.pulselive.com/photo-resources/2025/02/10/4166e780-86ca-49d8-a42b-4627d26b1f48/I8FgpnEk.png?height=400&width=600",
            name:"Johann Zarco",
            team:"CASTROL Honda LCR",
            number:5,
            country:"France",
            photoCountry:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
        }
    ]

    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Pilot {...PILOTS[0]} />
                <Pilot {...PILOTS[1]} />
                <Pilot {...PILOTS[2]} />
                <Pilot {...PILOTS[3]} />
                <Pilot {...PILOTS[4]} />
                <Pilot {...PILOTS[5]} />
            </div>
        </>
    );
}

export default DivPilots;