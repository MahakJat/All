import React, { useContext, useEffect } from "react";
import { NotesContext } from "./KeepNotesContext/NotesContext";

const AddNewNotes = () => {
  const { state, dispatch } = useContext(NotesContext);
  return (
    <div className="AddNewNotes">
      <i className="add-note ri-add-line"></i>
      <div className="color-set">
        <div
          onClick={() => {
            dispatch({ type: "add", color: "#f5c173", note: "" });
          }}
          className="color-1"
        ></div>
        <div
          onClick={() => {
            dispatch({ type: "add", color: "#f1946f", note: "" });
          }}
          className="color-2"
        ></div>
        <div
          onClick={() => {
            dispatch({ type: "add", color: "#ac87eb", note: "" });
          }}
          className="color-3"
        ></div>
        <div onClick={() => {
            dispatch({
              type: "add",
              color: " #8269b2",
              note: "",
            });
          }}
          className="color-4"
        ></div>
        <div onClick={() => {
            dispatch({ type: "add", color: "#dbe58b", note: "" });
          }}
          className="color-5"
        ></div>
      </div>
    </div>
  );
};

export default AddNewNotes;
