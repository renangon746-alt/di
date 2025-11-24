//props src y el alt
interface ImageData{
    src:string,
    alt:string
}

function Image({src, alt}:ImageData){
    return(
        <img src={src} alt={alt}></img>
    );
}

export default Image;