import cloud from '../images/cloud.png'

export default function Title(props){
    return(
        <div className="title">
            <img src={cloud} alt="cloud" />
            <h1>{props.text}</h1>
        </div>
    )
}