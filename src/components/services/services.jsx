import './style.css'
import webdev_icon from '../../images/icons/webdev_icon.png'
import csharp_icon from '../../images/icons/csharp_icon.png'
import db_icon from '../../images/icons/db_icon.png'
import uxui_icon from '../../images/icons/ui-ux_icon.png'
import Title from '../title.jsx'

export default function Services(){
    return (
        <>
            <div className="services">
                <Title text="Conocimientos"/>
                <ul className='service-items-list'>
                    <li className='service-item'>
                        <img className="svc-item-img" src={webdev_icon} alt="webdev" />
                        <h2>Desarrollo web</h2>
                    </li>
                    <li className='service-item'>
                        <img className="svc-item-img" src={csharp_icon} alt="webdev" />
                        <h2>.NET Core</h2>
                    </li>
                    <li className='service-item'>
                        <img className="svc-item-img" src={db_icon} alt="webdev" />
                        <h2>SQL</h2>
                    </li>
                    <li className='service-item'>
                        <img className="svc-item-img" src={uxui_icon} alt="webdev" />
                        <h2>UX/UI</h2>
                    </li>
                </ul>
            </div>
        </>
    )
}