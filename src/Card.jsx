import React from "react";
import "./card_d.css"

function Card({ note }) {
    const formattedDate = `${note.createdAt.getDate()}-${note.createdAt.getMonth() + 1}-${note.createdAt.getFullYear()}`;
    const formattedTime = `${note.createdAt.getHours()}:${note.createdAt.getMinutes()}:${note.createdAt.getSeconds()}`;

    return (
        <div className="card-container">
            <section className="card">
                <div className="date-time">
                    <p>{formattedDate}</p>
                    <p>{formattedTime}</p>
                </div>
                <div className="note-text">
                    <textarea placeholder="Write your note here...">{note.text}</textarea>
                </div>
            </section>
            
        </div>
    );
}

export default Card;
