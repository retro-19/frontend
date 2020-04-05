import React, { useState } from 'react';
import NoteModal from './noteModal';
import $ from 'jquery';

const StickyNotePage = () => {
    const [notes, setNotes] = useState([]);

    const onAdd = e => {
        $('#createNote').modal('show');
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={onAdd}>Add New Note</button><br></br>
            <button className="btn btn-primary">Done</button>
            <NoteModal id="createNote" heading="New Note"></NoteModal>
        </div>
    )
}

export default StickyNotePage;