import './style.css'
import Title from '../title.jsx'
import Button from '../button/button.jsx'

export default function Contact(){
    return (
        <>
            <div className="contact">
                <Title text="Contacto"/>
                <div className="ct-content">
                    <div className="contact-form">
                        <div className="input-field">
                            <label htmlFor="name" className='input-label'>Nombre</label>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email" className='input-label'>Email</label>
                            <input type="email" name="email" id="email"/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="name" className='input-label'>Mensaje</label>
                            <textarea name="msg" id="msg" rows="8" style={{resize: "none", height: "300px"}}></textarea>
                        </div>
                        <Button text="Enviar" margin="30px 0 0 0"/>
                    </div>
                    <div className="contact-text">
                        <h1>Sigamos en contacto!</h1>
                        <p>Consultame lo que necesites a través del formulario o enviandome un mail a mi correo personal</p>
                        <span>Email: ambriccam@gmail.com</span>
                    </div>
                </div>
            </div>
        </>
    )
}