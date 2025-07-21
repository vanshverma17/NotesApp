import React, { useState, useEffect } from "react";
import "./heading_d.css";

function Heading({ onNewNote }) {
    const [currentDateTime, setCurrentDateTime] = useState(getFormattedDateTime());
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    }); 

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(getFormattedDateTime());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    function getFormattedDateTime() {
        const date = new Date();
        return {
            date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
            time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        };
    }

    // Toggle dark mode
    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("darkMode",newMode);
        document.body.classList.toggle("dark-mode"); 
    };

    useEffect(() => {
        if (!darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return (
        <div className="heading-container">
            <section className="layout">
                <div className="heading">
                    <h1>NoteApp</h1>
                </div>

                <div className="current-date-time">
                    <h3>{currentDateTime.date}</h3>
                    <h3>{currentDateTime.time}</h3>
                </div>
                
                <label className="switch"> {/*toggle button from uiverse*/ }
                    <input 
                        type="checkbox" 
                        checked={darkMode} 
                        onChange={toggleDarkMode} 
                    />
                    <span className="slider">
                        <div className="star star_1"></div>
                        <div className="star star_2"></div>
                        <div className="star star_3"></div>
                        <svg viewBox="0 0 16 16" className="cloud_1 cloud">
                            <path
                                transform="matrix(.77976 0 0 .78395-299.99-418.63)"
                                fill="#fff"
                                d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
                            ></path>
                        </svg>
                    </span>
                </label>

                <div className="new-note-button">
                    <button onClick={onNewNote}>+</button>
                </div>
            </section>
        </div>
    );
}

export default Heading;
