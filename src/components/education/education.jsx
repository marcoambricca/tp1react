import './style.css'
import Title from '../title.jsx'
import Card from '../card/card.jsx'

export default function Education(){
    return (
        <>
            <div className="education">
                <Title text="Educacion" />
                <Card header="Bachillerato con orientacion en Informtatica" subheader="Escuela ORT (2019-2024)" content="Proyecto final destacado: Desarrollo de una inteligencia artificial para un probador de vestimenta, utilizando Python y React.js"/>
            </div>
        </>
    )
}