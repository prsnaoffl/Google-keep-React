import React,{useState} from 'react';
import Header from './Components/Header/Header';
import CreateArea from './Components/CreateArea/CreateArea';
import Note from "./Components/Note/Note";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes((prevNotes)=>{
      return [...prevNotes,newNote];
    });
  }
console.log(notes);

  function deleteNote(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((noteContent,index)=>{
        return index!==id;
      })
    })
  }

  return (
    <div>
       <Header />
       <CreateArea onAdd={addNote}/>
       {notes.map((noteContent,index)=>{
        //  console.log(ssnoteContent)
         return <Note 
                  key={index}
                  title={noteContent.title} 
                  content={noteContent.content} 
                  id={index}
                  onDelete={deleteNote}
                    />
       })
       }
    </div>
  )
}

export default App
