import "./style.css"

export default function AboutMe(){
    return(
        <>
            <div className="about">
                <div className="about-left-column">
                    <h2>Hola! Me llamo Marco Ambricca</h2>
                    <p>Soy estudiante de la escuela ORT de la especialidad de informatica. Además, estoy realizando el ingreso a la Universidad de Buenos Aires para seguir la carrera de Licenciatura en Analisis de Sistemas.</p>
                    <span id="age"></span>
                </div>

                <div className="about-right-column">
                    <img src="" alt="aboutme" className="aboutme-img"/>
                </div>
            </div>
        </>
    )
}