import './style.css'

export default function Button(props){
    return (
        <button style={{margin: props.margin}}>{props.text}</button>
    )
}