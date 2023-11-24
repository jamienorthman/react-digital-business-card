import React from "react"

export default function Info() {
    return (
        <div className="info-container">
            <img src="Miko_FM_020_Rendered.png" />
            <div className="name-email">
                <h2>Miko Ann Jeffries</h2>
                <p className="title">Frontend Developer</p>
                <p className="website">mikoann.com</p>
            </div>
            <div className="button-container">
                <a href="mailto:mikoann88@gmail.com">
                    <button className="email-btn">
                        <i className="fa-solid fa-envelope" target="_blank"></i> Email
                    </button>
                </a>
                <a href="https://linkedin.com/in/miko-ann-jeffries-a25855295" target="_blank">
                    <button className="linkedin-btn">
                        <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}