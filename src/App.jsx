import React,{useState} from "react"
import Card from "./Card"
import Heading from "./Heading"
import "./app_d.css";


function App() {

  const [notes,setNotes] = useState([]);

  const onNewNotes = () => {
    const newNotes = {
      id : Date.now(),
      text: "",
      createdAt : new Date(),
    };
    setNotes([...notes,newNotes]);
  };


  return (
    <div>
      <Heading onNewNote={onNewNotes}/>
      <div className="card-container">
        {notes.map((note) => (
          <Card key={note.id} note={note} />
      ))}
      </div>

    </div>
  )
}

export default App
