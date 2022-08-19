import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import NotesContext from "../context/NotesContext";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

// TODO: Add notes crud functionality
const NotesPage = () => {
  const { name, handleChange, handleSubmit, currentNote, notesList } =
    useContext(NotesContext);
  return (
    <div>
      <Navbar>
        <div className="w-screen h-screen flex flex-col justify-start container py-5 items-center">
          <h1 className="py-2 uppercase font-bold text-2xl">{name}</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 justify-center items-center relative w-full px-5"
          >
            <input
              onChange={handleChange}
              value={currentNote}
              className="textarea textarea-primary h-auto overflow-hidden w-full"
              placeholder="Enter a Note"
              type="text"
              name="note-input"
              id="note-input"
            />
            <IoIosAddCircleOutline className="text-2xl text-secondary absolute right-7 animate-spin" />
          </form>
          <div className="flex flex-col gap-5 items-center justify-center mx-5 mt-4">
            {notesList.map((note) => {
              <div className="w-auto h-auto bg-secondary rounded-3xl p-4  shadow-xl">
                <p>{note}</p>
                <div className="flex gap-5 mx-2 mt-4">
                  <AiOutlineDelete className="text-rose-400 cursor-pointer text-2xl " />
                  <AiOutlineEdit className="text-green-400 cursor-pointer text-2xl" />
                </div>
              </div>;
            })}
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default NotesPage;
