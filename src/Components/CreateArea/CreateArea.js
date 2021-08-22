import React, { useState } from 'react'
import "./CreateArea.css";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

const CreateArea = (props) => {
    const [isExpandable, setIsExpandable] = useState(false);
    const [note, setNote] = useState({
        title: " ",
        content:" "
    });
    
    function handleChange(event){
        const name=event.target.name;
        const value=event.target.value;

        setNote((prevNote)=>{
            return{
                ...prevNote,
                [name]:value,
            };
        });
    };

   
    function expand(){
        setIsExpandable(true);
    }

    function submitNote(event){
        // console.log(note);
        props.onAdd(note);
        setNote({
            title:"",
            content:"", //data binding
        });
    }


    return (
        <div>
            <form className="create-note">
            {isExpandable && (
            <input 
              name="title" 
              placeholder="Title" 
              value={note.title}  //data binding
              onChange={handleChange}
              />
            )}
                <textarea  
                  name="content"
                  placeholder="Take a note..."
                  rows={isExpandable? 3 : 1}
                  onClick={expand}
                  value={note.content}
                  onChange={handleChange}
                  />

            <Zoom in={isExpandable}>    
               <Fab onClick={submitNote}>
                <AddIcon />
               </Fab>
            </Zoom>

            </form>
        </div>
    )
}

export default CreateArea
