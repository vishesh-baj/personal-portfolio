import React, { createContext, useState } from "react";
const NotesContext = createContext();
export const NotesContextProvider = ({ children }) => {
  const name = "Notes ";
  const [notesList, setNotesList] = useState([]);
  const [currentNote, setCurrentNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotesList([...notesList, currentNote]);
    console.log(notesList);
    setCurrentNote("");
  };

  const handleChange = (e) => {
    setCurrentNote(e.target.value);
  };

  return (
    <NotesContext.Provider
      value={{ name, handleChange, handleSubmit, currentNote, notesList }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
