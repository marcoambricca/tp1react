import coding_topleft_icon from "../../images/coding_topleft_icon.png"
import github_icon from "../../images/icons/github_icon.png"
import linkedin_icon from "../../images/icons/linkedin_icon.png"
import youtube_icon from "../../images/icons/youtube_icon.png"
import LinkIcon from "../link-icon.jsx"
import "./style.css"

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
                    <h2 className="top-subheader">Estudiante de ORT Informatica</h2>
                    <div className="link-container">
                        <LinkIcon url="https://github.com/marcoambricca/" src={github_icon}/>
                        <LinkIcon url="https://ar.linkedin.com/in/marco-ambricca-abb3b02b9" src={linkedin_icon}/>
                        <LinkIcon url="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUJcmljayByb2xs" src={youtube_icon}/>
                    </div>
                </div>
            </div>
        </>
    )
}