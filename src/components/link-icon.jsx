export default function LinkIcon(props){
    return(
        <a className="link-icon" href={props.url}><img src={props.src} alt="link-icon" style={{width: "16px"}}/></a>
    )
}