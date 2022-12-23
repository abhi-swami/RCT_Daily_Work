export default function Avatar({imgSRC,altName,name,rounded}){
    const styleObj={
        border:"1px solid black",
        borderRadius:rounded?"50%":"10%",
        width:"30%",
        height:"25vh"
    }
    return (
        <>
        <img src={imgSRC} alt={altName} style={styleObj}/>
        <h3>{name}</h3>
        </>
    )
}