import Image from "./Image";

function DivImage(){

    const IMAGE = {
        src:"https://resources.motogp.pulselive.com/photo-resources/2025/02/10/4166e780-86ca-49d8-a42b-4627d26b1f48/I8FgpnEk.png?height=400&width=600",
        alt:"Coche"
    }

    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> 
                <Image {...IMAGE}/>
                <Image {...IMAGE}/>
                <Image {...IMAGE}/>
                <Image {...IMAGE}/>
                <Image {...IMAGE}/>
                <Image {...IMAGE}/>
                <Image {...IMAGE}/>
            </div>
        </>
    );
}

export default DivImage;