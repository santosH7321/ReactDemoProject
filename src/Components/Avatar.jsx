function Avatar(props){
    return(
    <>
        <img src={props.src}
        width={props.width}
        height={props.height} />
    </>
    )
}

export default Avatar;