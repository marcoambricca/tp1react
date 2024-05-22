import "./style.css"
import pfp from "../../images/pfp.jpg"

export default function AboutMe(){
    return(
        <>
            <div className="about">
                <div className="about-left-column">
                    <h2>Hola! Me llamo Marco Ambricca</h2>
                    <p>Soy estudiante de la escuela ORT de la especialidad de informatica.<br></br> Además, estoy realizando el ingreso a la Universidad de Buenos Aires para seguir la carrera de Licenciatura en Analisis de Sistemas.</p>
                    <div className="left-info">
                        <span>Edad: <span className="edad">17 años</span></span>
                        <span>Email: <span className="email">ambriccam@gmail.com</span></span>
                    </div>
                    <br></br>
                    <p>Mis conocimientos me permiten desarrollar proyectos Full-Stack con mis capacidades tanto de Back-end como Front-end.<br></br> También cuento con ganas de participar en todo tipo de proyectos relacionados a la tecnologia.</p>
                </div>

                <div className="about-right-column">
                    <img src={pfp} alt="aboutme" className="aboutme-img"/>
                </div>
            </div>
        </>
    )
}