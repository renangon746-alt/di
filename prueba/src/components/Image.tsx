interface ImageData {
    src:string;
    alt:string;
    width:number;
    height:number;
}

function Image(){
    
    let image:ImageData = {
        src: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25082439/reactnative-inner.svg",
        alt: "Image description",
        width: 200,
        height: 200
    }

    return <img src={image.src} alt={image.alt} width={image.width} height={image.height} />;
}

export default Image;