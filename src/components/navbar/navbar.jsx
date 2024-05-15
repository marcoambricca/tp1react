import './style.css';

function NavHeaderText(props){
    return <h1 className="nav-header-text">{props.text}</h1>
}

function NavLink(props){
    return (
        <li className="nav-item"><a className="nav-link" href={ props.href }>{ props.linkName }</a></li>
    )
}

export default function NavBar(){
    return (
        <div className="nav">
            <NavHeaderText text="Marco Ambricca"/>
            <ul className="link-container">
                <NavLink linkName="Acerca de mi" href="#about"/>
                <NavLink linkName="Conocimientos" href="#conocimientos"/>
                <NavLink linkName="Educacion" href="#educacion"/>
                <NavLink linkName="Certificaciones" href="#certificaciones"/>
                <NavLink linkName="Contacto" href="#contact"/>
            </ul>
        </div>
    )
}