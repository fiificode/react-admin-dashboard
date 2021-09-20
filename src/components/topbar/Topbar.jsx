import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">FiifiFranklin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">3</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://basaschools.co.za/wp-content/uploads/2021/04/boy-avator.png" alt="" className="topAvator" />
                </div>
            </div>
        </div>
    )
}
