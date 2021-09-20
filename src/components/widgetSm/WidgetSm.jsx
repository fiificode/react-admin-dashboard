import { Visibility } from '@material-ui/icons'
import React from 'react'
import "./widgetSm.css"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList"> 
                <li className="widgetSmListItem">
                    <img src="https://www.kindpng.com/picc/m/38-386197_avatar-woman-female-icon-people-person-head-icon.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList">                    
                <li className="widgetSmListItem">
                    <img src="https://p.kindpng.com/picc/s/76-763010_female-user-icon-png-transparent-png.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Mary White</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://www.seekpng.com/png/detail/204-2043527_free-high-quality-male-icon-user-stock.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Wick</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList"> 
                <li className="widgetSmListItem">
                    <img src="https://cdn1.iconfinder.com/data/icons/avatars-round-flat/33/an-04-512.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Fiifi Billions</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://www.apexskin.com/wp-content/uploads/2018/04/male-patient-testimonial-apex-dermatology.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Alfred West</span>
                        <span className="widgetSmUserTitle">Website Desiger</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
