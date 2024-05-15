import coding_topleft_icon from "../../images/coding_topleft_icon.png"
import github_icon from "../../images/icons/github_icon.png"
import linkedin_icon from "../../images/icons/linkedin_icon.png"
import youtube_icon from "../../images/icons/youtube_icon.png"
import Icon from "../icon.jsx"

export default function TopSection(){
    return (
        <>
            <div className="top-section">
                <div className="left-column-top">
                    <img className="coding-topleft-icon" src={coding_topleft_icon} alt="coding-topleft-icon" />
                </div>
                <div className="right-column-top">
                    <span style={{fontSize: "30px"}}>Hola!</span>
                    <h1 className="top-header">Soy Marco Ambricca</h1>
                    <h2 className="top-subheader">Licenciado en Analisis de Sistemas</h2>
                    <Icon url="https://github.com/marcoambricca/" src={github_icon}/>
                    <Icon url="https://ar.linkedin.com/in/marco-ambricca-abb3b02b9" src={linkedin_icon}/>
                    <Icon url="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUJcmljayByb2xs" src={youtube_icon}/>
                </div>
            </div>
        </>
    )
}