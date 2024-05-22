import './style.css'

export default function Card(props){
    return (
        <>
            <div className="card">
                <div className="top">
                    <h1 className="header">{props.header}</h1>
                    <span className="subheader">{props.subheader}</span>
                </div>
                <div className="content">
                    {props.content}
                </div>
            </div>
        </>
    )
}