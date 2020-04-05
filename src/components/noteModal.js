import React, { useState } from 'react';
import 'bootstrap/js/src/modal.js';

const NoteModal = ({ id, heading }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");

    return (
        <div className="modal" id={id} role="dialog" data-backdrop="static" data-keyboard="false">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{heading}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"></input>
                            </div>
                            <div className="form-group">
                                <label>Thoughts: </label>
                                <textarea className="form-control" value={text} onChange={e => setText(e.target.value)}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Category: </label>
                                <div className="form-check">
                                    <input class="form-check-input" type="radio" id="cat1" name="category" value=":)" onChange={e => setCategory(e.target.value)}></input>
                                    <label class="form-check-label" for="cat1">
                                        :)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input class="form-check-input" type="radio" id="cat2" name="category" value=":(" onChange={e => setCategory(e.target.value)}></input>
                                    <label class="form-check-label" for="cat2">
                                        :(
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input class="form-check-input" type="radio" id="cat3" name="category" value=":|" onChange={e => setCategory(e.target.value)}></input>
                                    <label class="form-check-label" for="cat3">
                                        :|
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NoteModal;