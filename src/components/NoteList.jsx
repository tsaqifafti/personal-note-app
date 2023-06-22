import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteList({ notes }) {
    return (
        <section className="notes-list">
            {notes.length === 0 ? (
                <p>tidak ada catatan</p>
            ) : (
                notes.map((note) => (
                    <NoteItem key={note.id} id={note.id} {...note} />
                ))
            )}
        </section>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
